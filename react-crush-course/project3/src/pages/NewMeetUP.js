import { useNavigate } from "react-router-dom"
import NewMeetUpForm from "../components/Meetups/NewMeetupForm"

function NewMeetUpPage(){
    const navigate = useNavigate()

    function addMeetUpHandler(meetupData){
        fetch(
            "https://react-getting-started-215bb-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", {replace:true})
        })
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetUpForm onAddMeetUp={addMeetUpHandler}/>
        </section>
    )
}
export default NewMeetUpPage