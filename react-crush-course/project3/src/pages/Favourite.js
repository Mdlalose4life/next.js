import { useContext } from "react";
import FavoritesContext from "../store/favourites-context";
import MeetUpList from "../components/Meetups/MeetUpList";

function FavouritePage(){
    const favoriteCtx = useContext(FavoritesContext)

    let content;

    if (favoriteCtx.totalFavorites === 0){
        content = <p>
            You do not have favorites, start adding some
        </p>
    } else {
        content = <MeetUpList meetups={favoriteCtx.favorites}/>
    }

    return(
        <section>
            {content}
        </section>
    )
}
export default FavouritePage;