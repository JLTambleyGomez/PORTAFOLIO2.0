import "./time.css"
import { useEffect, useState } from "react"

const BeautyTimer = () => {
    const [formattedTime, setFormattedTime] = useState("--")

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const formattedTimeString = formatTime(currentTime);
            setFormattedTime(formattedTimeString);
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

    const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="timer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>
           : {formattedTime}
        </div>
    )
}

export default BeautyTimer
