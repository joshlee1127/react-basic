import { useState, useEffect } from "react"

import MeetupList from "../components/meetups/MeetupList"
const DummyData = [
    {
        id: "m1",
        title: "This is a first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    },
    {
        id: "m2",
        title: "This is a second meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    }
]

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])
    const fireBaseUrl =
        "https://josh-firegram-default-rtdb.firebaseio.com/meetups.json"
    useEffect(() => {
        setIsLoading(true)
        fetch(fireBaseUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let meetups = []
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setIsLoading(false)

                setLoadedMeetups(meetups)
            })
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading.....</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage
