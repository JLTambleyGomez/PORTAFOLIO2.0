import './App.css'; 
import { useState, useRef } from "react";
import BeautyTimer from './time/time';
import Cube from "./3dLogos/3dNodejs";
import Winbar from "./winbar/winbar"
import Status from './Status/status';
import Consola from "./consola/consola"

const App = () => {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [complete,setcomplete]=useState(false)
  const audioUrl =
    "https://res.cloudinary.com/ddectuilp/video/upload/v1707836765/Portafolio/notificacion_l6uuet.mp3";



  const handlePlayMusic = async () => {
   if(!isPlaying && !complete){
        await audioRef.current.play();
        setIsPlaying(true)
        setcomplete(true)
       await wait(4000)
       setIsPlaying(false)

    }}

    const handleblur=()=>{
      setIsPlaying(false)
    }


  return (
    <div>
    <div onMouseMove={handlePlayMusic}  className="contain">
  
      <Consola    ></Consola>
      <Cube className="cube"></Cube>
      <Winbar className="bar" ></Winbar>
      <audio ref={audioRef} src={audioUrl} />

    </div>
    {isPlaying && 
    <div onMouseLeave={handleblur}>
            <img className="clip" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707836176/Portafolio/clip_f4ugd8.png" alt="Clip"></img>
            <p className="msj">You can view Projects and download the resume.</p>


            </div>
             }
             <BeautyTimer></BeautyTimer>
             <Status></Status>
    </div>
  );
}

export default App;
