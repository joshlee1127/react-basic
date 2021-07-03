import { useHistory } from "react-router-dom"
import NewMeetupFrom from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const history = useHistory()
    function addMeetupHandler(meetupData) {
        const fireBaseUrl =
            "https://josh-firegram-default-rtdb.firebaseio.com/meetups.json"
        fetch(fireBaseUrl, {
            method: "POST",
            body: JSON.stringify(meetupData),
            Headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            history.replace("/")
        })
    }
    return (
        <section id="">
            <h1> Add New Meetup !</h1>
            <NewMeetupFrom onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
