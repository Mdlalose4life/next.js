import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css"
import { FaPlantWilt } from "react-icons/fa6";
import { useContext } from "react";
import FetcthedPlantsContext from "../../store/FetchPlans-context";
import FavoritePlantContext from "../../store/FavoritePlantContext";
import { useLocation } from "react-router-dom";

function MainHeader() {
    const location = useLocation();
    const numberOfPlantCtx = useContext(FetcthedPlantsContext)
    const numberOfFavoritesCtx = useContext(FavoritePlantContext)


    let numberOnBadge = null
    if (location.pathname === "/"){
        numberOnBadge = (
        <> Number of Plants: 
            <span className={classes.numberbadge}>
                {numberOfPlantCtx.numberOfPlants}
            </span>
        </>
        )
    } else if (location.pathname === "/FavoritePlant") {
        numberOnBadge = (
            <> Favorite Plants: 
                <span className={classes.numberbadge}>
                    {numberOfFavoritesCtx.totalfavorites}
                </span>
            </>
        )
    } else if (location.pathname === "/Newplant") {
        numberOnBadge = (
            <> Add one plant in your Gaden</>
        )
    }
    
    return(
        <nav className={classes.header}>
            <div className={classes.headerdiv}>
                <Link to="/">
                    <FaPlantWilt className={classes.logo}/>
                    <h1>Practice App</h1>
                </Link>
            </div>
            <div>
                {numberOnBadge}
            </div>

            <ul>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/FavoritePlant">Favorite Plants</Link>
                </li>
                <li>
                    <Link to="/Newplant">New Plant</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainHeader