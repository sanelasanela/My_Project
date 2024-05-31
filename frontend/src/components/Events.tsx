import  { useEffect, useState } from "react";
import axios from 'axios';
import { Event } from "../Event.ts";
import EventCard from "./EventCard.tsx";
import { Link } from "react-router-dom";
import SearchEvents from "./SearchEvents.tsx";

function Events() {
    const [events, setEvents] = useState<Event[]>([]);
 //   const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

    const [eventName, setEventName] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventReview, setEventReview] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchEvents();
    }, []);
    const fetchEvents = () => {
        setIsLoading(true);
        axios.get("/Event/allEvents")
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => console.error('Error loading events:', error))
            .finally(() => setIsLoading(false));
    };
    const handleSearch = (result: Event[]) => {
    //    const filtered = events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setEvents(result);
     //   setFilteredEvents(filtered);
    };

    const handleAddEvent = () => {
        const newEvent = {
            name: eventName,
            location: eventLocation,
            review: eventReview
        };
        axios.post("/Event/addEvent", newEvent)
            .then(response => {
                console.log("New event added:", response.data);
                fetchEvents();
            })
            .catch(error => {
                console.error('Error adding event:', error);
            });
    };
    const handleDeleteEmptyEvents = () => {
        const emptyEventsIndexes = events
            .map((event, index) => ({ isEmpty: event.name.trim() === "" && event.location.trim() === "", index }))
            .filter(event => event.isEmpty)
            .map(event => event.index);

        const updatedEvents = events.map((event, i) => {
            if (emptyEventsIndexes.includes(i)) {
                return {
                    name: "Empty Event",
                    location: "Unknown",
                    review: event.review
                };
            } else {
                return event;
            }
        });


        setEvents(updatedEvents);

        emptyEventsIndexes.forEach(index => {
            const id = events[index].id;
            handleDeleteEvent(id);
        });
    };

    const handleDeleteEvent = (id?: string) => {
        if (!id){
            return;
        }
        axios.delete(`/Event/deleteEvent/${id}`)
            .then(() => {
                console.log("Event deleted:", id);
                fetchEvents();
            })
            .catch(error => console.error('Error deleting event:', error.response.data));
    };


    if (!events.length) {
        return (
            <div>
                <p><h1>Your search did not match any results!</h1></p>
                <Link to="/">Go to Home Page</Link>
            </div>
        );
    }

    return (
        <div>
            <SearchEvents onSearch={handleSearch}/>
            <h1>Events Page</h1>
            <div className="RestListe">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    events.map((event) => (
                        <div key={`${event.id}`}>
                            <EventCard event={event}/>
                            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
            <div style = {{marginTop:"20px"}}>
                <button onClick={handleDeleteEmptyEvents}>Delete Empty Events</button>
            </div>
            <div>
                <h2>Add New Event</h2>
                <input type="text" placeholder="Event Name" value={eventName}
                       onChange={e => setEventName(e.target.value)}/>
                <input type="text" placeholder="Event Location" value={eventLocation}
                       onChange={e => setEventLocation(e.target.value)}/>
                <input type="number" placeholder="Event Review" value={eventReview}
                       onChange={e => setEventReview(e.target.value)}/>
                <button onClick={handleAddEvent}>Add Event</button>
            </div>

            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
        </div>
    );
}

export default Events;