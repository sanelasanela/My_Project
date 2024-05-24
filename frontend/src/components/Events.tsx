import { useEffect, useState } from "react";
import axios from 'axios';
import { Event } from "../Event.ts";
import EventCard from "./EventCard.tsx";
import { Link } from "react-router-dom";
import SearchEvents from "./SearchEvents.tsx";

function Events() {
    const [events, setEvents] = useState<Event[]>([]);
 //   const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

    useEffect(() => {
        axios.get("/Event/allEvents")
            .then(response => {
                setEvents(response.data);
           //     setFilteredEvents(response.data); // Start with all events
            })
            .catch(error => console.error('Fehler beim Laden der Events:', error));
    }, []);

    const handleSearch = (result: Event[]) => {
    //    const filtered = events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setEvents(result);
     //   setFilteredEvents(filtered);
    };

    if (!events.length) {
        return "Loading...";
    }

    return (
        <div>
            <SearchEvents onSearch={handleSearch} />
            <h1>Events Page</h1>
            <div className="RestListe">
                {events.map(event => (
                    <EventCard key={event.name} event={event} />
                ))}
            </div>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
        </div>
    );
}

export default Events;