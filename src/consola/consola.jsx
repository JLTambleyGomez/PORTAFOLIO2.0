import { useState, useEffect } from "react";
import './consola.css'; 

const Consola = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [terminal,setTerminal ]=useState(false)


  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      setTerminal(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prevVisible => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containconsole">
      <div className="console">
        <img src="https://res.cloudinary.com/ddectuilp/image/upload/v1707787365/Portafolio/GitLogo_zoc7q6.png" className="GitLogo" alt="Git Logo" />
        <p className="barrainfo">MINGW:/c/Users/Backend_Jorge_Tambley/DevInformation</p>
          <br></br>
          <div className="terminal">
  <p className="terminalgreen">JorgeTambley@Desktop-B4k3ND</p>
  <p className="terminalb">MINGw64</p>
  <p className="termimalyellow">~</p>
</div>

          <p className="mensaje">  $ Press Enter key to get developer information {isVisible && !terminal&&"|"}</p>
            {terminal&&
            <>
            <p className="mensaje">$ Name: Jorge Tambley</p>
            <p className="mensaje">$ Country: From Chile, currently in Brazil to learn my third language</p>
            <p className="mensaje">$ Interest or Activities: Learning programming languages, Backend development, Creating Landing Pages</p>
            <p className="mensaje">$ Languages: JavaScript, Python</p>
            <p className="mensaje">$ Future Plans: Learning AWS + Java or Rust</p>
            <p className="mensaje">$ Additional Information: Often works on complex personal projects</p>
            <p className="mensaje">$ Click to Open -----  Whatsapp  ----- Email----- Linkedin {isVisible && terminal&&"|"}</p>
            </>
            
            }

    
      </div>

    </div>
  );
}

export default Consola;
