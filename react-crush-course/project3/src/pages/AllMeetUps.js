import MeetUpList from "../components/Meetups/MeetUpList";
import { useState, useEffect } from "react";

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  
  
  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-getting-started-215bb-default-rtdb.firebaseio.com/meetups.json"
    )
    .then(response => {
      return response.json();
    })
    .then(data =>{
      const meetups = [];

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup)
      }
      setLoadedMeetups(meetups)
      setIsLoading(false)
    })
  }, [])


    return (
      isLoading ? (
        <section> <p> Loading... </p> </section>
      ) : (
        <section> 
        <div>
            <ul>
                <h1> All Items </h1>
                <MeetUpList meetups={loadedMeetups}/>
            </ul>
        </div>
      </section>
      )
    )
}
export default AllMeetUpPage;