import './App.css'
import Home from "./components/Home.tsx";
import Events from "./components/Events.tsx";
import {Route, Routes} from "react-router-dom";



function App() {
  return (

          <Routes>
                  <Route path="/" element ={<Home/>} />
                  <Route path="/events" element={<Events/>} />
          </Routes>

          );
}

export default App
