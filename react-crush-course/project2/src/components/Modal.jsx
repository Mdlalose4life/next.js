function Modal({onClose}) {
    return(
        <>
            <div className="backdrop" onClick={onClose}/>
            <div className="modal">
                <p> Are you sure? </p>
                <button onClick={onClose} className="btn btn--alt">Cancel</button>
                <button onClick={onClose} className="btn">Confirm</button>
            </div>
        </>
    )
}
export default Modal;