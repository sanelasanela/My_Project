import './HomeCSS.css';
import Info from "./Info.tsx";
import EventLogo from '/event.svg'
import pictureLogo from "/picture.svg";

function Home() {
    return (
        <>
            <div>
                <a href="https://www.eventbrite.de/" target="_blank">
                    <img src={EventLogo} className="logo" alt="Event logo"/>
                </a>
                <a href="https://uploads.sarvgyan.com/2014/08/event-management.jpg" target="_blank">
                    <img src={pictureLogo} className="logo picture" alt="Picture logo"/>
                </a>
            </div>
            <h1>Event Page & Event picture</h1>
            <div>
                <Info/>
            </div>
            <div className="card">
                <p>
                    <h2> Have a fun!!!</h2>
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Event Page and Event picture to learn more!
            </p>
        </>
    )
}
export default Home;