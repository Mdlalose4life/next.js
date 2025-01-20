import "../index.css"

function Todo(props) {
    return(
        <div className='card'>
            <div>{props.text}</div>
            <div className='actions'>
                <button className='btn' onClick={props.onDeleting}>Delete</button>
            </div>
        </div>
    )
}
export default Todo;