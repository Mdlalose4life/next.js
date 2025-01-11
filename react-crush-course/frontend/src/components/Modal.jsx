import classes from "./Modal.module.css"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Modal({ children}) {
    const navigate = useNavigate()

    function onCloseHnadler(){
        navigate("/")
    }

    return (
    <>
        <div className={classes.backdrop} onClick={onCloseHnadler} />
        <dialog open className={classes.modal}>{children}</dialog>
    </>
    )
}

export default Modal