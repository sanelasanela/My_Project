import './HomeCSS.css';
import {useState} from "react"; // CSS für das Styling der Info

function Info() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <button onClick={toggleModal}>INFO!</button>
            {showModal && (
                <div className="info-page">
                    <div className="info-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <p>
                            <h3>This page is a dedicated section where
                            you can discover and engage with upcoming
                            events, or activities. It serves as a central hub to explore and learn more about events that align with users interests. The page typically
                            features a list or grid of upcoming events, each with a brief
                            summary including the event title, date, time, location, and possibly a featured image.
                            Overall, this page enhances the user experience by
                            providing a comprehensive and user-friendly platform for exploring, engaging with,
                            and participating in a wide range of events and activities.
                               </h3>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Info;