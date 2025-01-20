import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favourites-context'

function MeetupItem(props) {
    const favoriteCtx =  useContext(FavoritesContext)

    const isItemFavorite =  favoriteCtx.itemIsFavorite(props.id)


    function toggleFavoritesStatusHandler(){
        if (isItemFavorite){
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavourite({
                id: props.id,
                image: props.image,
                tittle: props.tittle,
                description: props.description,
                address: props.address
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.tittle}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.tittle}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHandler}>
                        {isItemFavorite ? 'Remove from Favorites' : 'To Favorite'}
                    </button>
                </div>
            </Card>
        </li>
    )
}
export default MeetupItem