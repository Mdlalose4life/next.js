import "../index.css"

function Todo(props) {
    function deleteHandler() {
        console.log("Clicked");
        console.log(props.text)
    }
    return(
        <div className='card'>
            <div>{props.text}</div>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}
export default Todo;