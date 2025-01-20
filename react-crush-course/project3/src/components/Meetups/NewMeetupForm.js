import { useRef } from "react";
import Card from "../ui/Card";
import clasess from "./NewMeetupForm.module.css"

function NewMeetUpForm(props){
    const titleInputref = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHander(event) {
        event.preventDefault()

        const enteredtitle = titleInputref.current.value;
        const enteredimage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredtitle,
            image: enteredimage,
            address: enteredAddress,
            Description: enteredDescription
        }

        props.onAddMeetUp(meetupData)
    }

    return (
        <Card>
            <form className={clasess.form} onSubmit={submitHander}>
                <div className={clasess.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputref}/>
                </div>
                <div className={clasess.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={clasess.control}>
                    <label htmlFor="tittle">Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={clasess.control}>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description" 
                        required 
                        rows={5}
                        ref={descriptionInputRef}
                    >
                    </textarea>
                </div>
                <div className={clasess.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetUpForm;