import "./EventCardCSS.css"
import {Event} from "../Event.ts";

type Props = {
    event : Event,
}

function EventCard( props : Props) {

    return (
        <div className="eventcard">
            <p>
                <h5>{props.event.name}</h5>

               <h4>{props.event.location}</h4>
               <h4>Review: {props.event.review}/5</h4>
            </p>
        </div>
    )
}

export default EventCard;