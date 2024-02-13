import{useState}from "react"
import './winbar.css';
const Winbar=()=>{
    const [secondbar,setSecondBard]=useState(false)
    const[services,setservices]=useState(false)
    const[bar,showbar]=useState(false)
    
    const handleshowbar=()=>{
        bar?showbar(false):showbar(true)
    }

    const handlecloseall=()=>{
        showbar(false)
        setservices(false)
        setSecondBard(false)
    }
    
    const handleThrBarChange=()=>{
        secondbar?setSecondBard(false):null
        services?setservices(false):setservices(true)
    }

    const handleSecondBarChange=()=>{
        services?setservices(false):null
     secondbar? setSecondBard(false):setSecondBard(true)
    
    }


    return(
        <div className="winbarcontain">
<svg  onClick={handleshowbar} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="start" viewBox="0 0 16 16">
  <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
</svg>  

<div onMouseLeave={handlecloseall}>
        {bar&&
        <div  className="menu">
            <img className="Perfilimg" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707841677/Portafolio/414670978_381809497640591_3901652548932990394_n_ilkblx.jpg"></img>
        <p > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg> Download English Resume</p>
        <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg> Download Spanish Resume</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg> Download Portuguese Resume</p>
        <p   onMouseEnter={handleSecondBarChange}>Projects<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg> </p>
<p  onMouseEnter={handleThrBarChange} >Freelancer Services<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg> </p>

        </div> }

        {secondbar&&
        <div  className="secondbar">
            <p>Python Binance Buy and Sell Gatget</p>
            <p>JS-Python ArbitriumBot</p>
            <p>JS-Python ArbitriumBot 2.0 Without Visual</p>
            <p>Perfect-Trade WEBPAGE-SERVER-DB</p>
            <p>EasyP2PCalculator</p>
            <p>LandingPage-MusicProduction</p>
            <p>Find A Job WEBPAGE-SEVER-DB</p>
            <p>Loterica-Bingo-WEBPAGE-SERVER-DB</p>
            <p>ProgrammersGurúTeamDev-WEBPAGE-SERVER-DB</p>
            <p>ProgrammersGurú-WEBPAGE-SERVER-DB-PF</p>
            <p>2FA-AUTH-TESTER-PAGE-SERVER</p>


        </div>
}
        {services &&  <div  className="secondbar">
            <p>Web Automatization</p>
            <p>Mail Notifications</p>
            <p>Security-Authentication 2FA</p>
            <p>Security-RequestLimiter </p>
            <p>DataEncriptation</p>
            <p>API</p>
            <p>DB</p>
            <p>BOT-TRADING</p>
            <p>WEB-PAGE</p>
            <p>WEB-PAGE-SERVER</p>
            <p>WEB-PAGE-SERVER-DB</p>
            
            
            </div>}
    
</div>



 </div>
    )
}

export default Winbar