import classes from "./Card.module.css"

function Card({ children }){
    return(
        <div className={classes.Card}>
            {children}
        </div>
    )
}
export default Card