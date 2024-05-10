import {useEffect, useState} from "react";
import axios from 'axios';
import {Event} from "../Event.ts";
import EventCard from "./EventCard.tsx";

function Events() {

    const [event, setEvent] = useState<Event[]>()

    useEffect(() => {
            axios.get("/Event/allEvents")
                .then(response => {
                    setEvent(response.data)
                })

        }, []
    )

    if(!event){
        return " Loading..."
    }


    return (
        <div>
            <h1>Events Page</h1>
            <div className="RestListe">
                {
                    event.map(element=> <EventCard event={element}/> )
                }
            </div>
        </div>
    );
}

export default Events;