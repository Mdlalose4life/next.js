import { useContext } from "react"
import FavoritePlantContext from "../store/FavoritePlantContext"
import PlantList from "../components/plants/PlantList"

function FavouritePlants() {
    const {totalfavorites, favorites} = useContext(FavoritePlantContext)
    console.log('Favorites:', favorites);
    let content;

    if (totalfavorites == 0){
        content = <p style={{display:"flex", 
            alignContent:"center", 
            justifyContent:"center"}}>
            You currently do not have the Favorite plant
        </p>
    } else if (totalfavorites !== 0) {
        content = <PlantList  plantlists={favorites}/>
    } else {
        content = <p style={{display:"flex", 
            alignContent:"center", 
            justifyContent:"center"}}>
            Loading ...
        </p>
    }

    return (
        <div>
            {content}
            {console.log(content)}
        </div>
    )
}
export default FavouritePlants