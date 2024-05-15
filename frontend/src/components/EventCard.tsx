import "./EventCardCSS.css"
import {Event} from "../Event.ts";
import {useState} from "react";

type Props = {
    event : Event,
}

function EventCard( props : Props) {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const handleMapClick = () => {
        window.open(`https://www.openstreetmap.org/?query=${encodeURIComponent(props.event.location)}`, '_blank');
    };
    return (
        <div className="eventcard">
            <p>
                <h5>{props.event.name}</h5>
                <p
                    onClick={handleMapClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{color: hovered ? 'blue' : 'greenyellow', cursor: 'pointer'}}
                >
                    <h2>{props.event.location}</h2>
                </p>
                <h4>Review: {props.event.review}/5</h4>
            </p>
        </div>
    )
}

export default EventCard;