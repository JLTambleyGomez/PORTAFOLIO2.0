// --------------- IMPORTS ---------------
import { Routes, Route   } from 'react-router-dom';
import { useSelector } from 'react-redux';
import{useEffect} from "react"
import ChangeLenguajeAndDarkMode from "./components/PrimaryComponents/ChangeLenguajeAndDarkMode/ChangeLenguajeAndDarkMode"
import LandingPage from  './components/PrimaryComponents/LandingPage/LandingPage';

// --------------- COMPONENT ---------------
const App = () => {
    const user = useSelector((state) =>state.user)
    const darkmode= useSelector((state) =>state.darkmode)

    useEffect(() => {
       
        // Cambiar el estilo del body aquí
        document.body.style.backgroundColor = darkmode ? '#000' : '#fff';
        document.body.style.color = darkmode ? '#fff' : '#000';
      }, [user, darkmode]);


    return (
        <div>
          <ChangeLenguajeAndDarkMode></ChangeLenguajeAndDarkMode>
            <Routes>
           
        <Route path="/" element={<LandingPage/>} />
       
        </Routes>

             

        </div>
    )

}


// --------------- EXPORTS ---------------
export default App;