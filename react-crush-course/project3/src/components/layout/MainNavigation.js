import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import FavoritesContext from "../../store/favourites-context";


function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);
    return( 
        <header  className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourite</Link>
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
     )
}
export default MainNavigation;