/* eslint-disable react-refresh/only-export-components */
import classes from "./NewPost.module.css"
import Modal from "../components/Modal"
import { Link, Form, redirect } from "react-router-dom";


// function NewPost(){
// console.log("Here we work")
    // function NewPost({onAddPost}
    // const [enteredBody, setEnteredBody ]= useState('');
    // const [enterAuthor, setEnterAuthor] = useState('');
  
    // function bodyChangeHandler(event) {
    //   setEnteredBody(event.target.value)
    // }
  
    // function authorChangeHandler(event) {
    //   setEnterAuthor(event.target.value)
    // }

    // function submitHandler(event){
    //     event.preventDefault();
    //     const formData = {
    //         body: enteredBody,
    //         author: enterAuthor
    //     };
    
    //       fetch("http://localhost:8080/posts",{
    //         method: "POST",
    //         body: JSON.stringify(postData),
    //         headers: {
    //           'content-type': 'application/json'
    //         }
    //       });
    
    //     onAddPost(formData)
    // }

    function NewPost() {
        return (
            <Modal>
                <Form method="post" className={classes.form}>
                    <p>
                        <label htmlFor="body">Text</label>
                        <textarea id="body" name="body" required rows={3} />
                    </p>
                    <p>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="author" required />
                    </p>
                    <p className={classes.actions}>
                        <Link to=".." type="button">Cancel</Link>
                        <button>Submit</button>
                    </p>
                </Form>
            </Modal>
        );
    }
    
    export default NewPost;
    
    export async function action({ request }) {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData.entries());
    
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (!response.ok) {
            throw new Error("Failed to send data");
        }
    
        return redirect("/");
    }