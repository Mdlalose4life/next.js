/* eslint-disable react/prop-types */
import Card from "../ui/Card"
import classes from "./PlantItems.module.css"
import FavoritePlantContext from "../../store/FavoritePlantContext"
import { useContext } from "react"

function PlantItems(props) {
    const favoriteCtx = useContext(FavoritePlantContext);

    const isPlantFavorite = favoriteCtx.isPlantFavorite(props.id)

    function toggleFavoriteStatuHandler(){
        if (isPlantFavorite){
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                key: props.id,
                id: props.id,
                name: props.name,
                scientificName: props.scientificName,
                image: props.image,
                description: props.description,
                category: props.category,
                care: {
                    light : props.light || "Default Light",
                    water : props.water || "Default Water"
                }    
            })
        }
    }
    
    return(
        <Card>
            <li className={classes.item}>
                <div>
                    <img src={props.image} className={classes.image}/>
                </div>
                <div className={classes.details}>
                    <h4 style={{color:"black"}}>{props.name}</h4>
                    <h6 style={{color:"black"}}>{props.scientificName}</h6>
                    <p className={classes.description}>{props.description}</p>
                    <p className={classes.category}><strong>Category:</strong> {props.category}</p>
                    <p className={classes.care}><strong>Light Requirement:</strong> {props.light}</p>
                    <p className={classes.water}><strong>Watering:</strong> {props.water}</p>             
                </div>
                <div >
                    <button className={classes.favoriteButton} onClick={toggleFavoriteStatuHandler}>
                        {isPlantFavorite ? "Remove from Favorites" : "To Favorite"}
                    </button>
                </div>
            </li>
        </Card>
    )
}
export default PlantItems