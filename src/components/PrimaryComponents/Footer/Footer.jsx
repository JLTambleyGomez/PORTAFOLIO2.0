import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css"

const Footer = () => {
  const lenguaje = useSelector((state) => state.lenguaje);
  const darkmode = useSelector((state)=>state.darkmode)

  const containerStyle = {
      backgroundColor: darkmode ? "#000" : "#fff",
      transition: "all 0.5s",
  
    };
  return (
    <div className={styles.container} style={containerStyle} >
      <p>© 2023</p>
      <p>
        {lenguaje === 'ES'
          ? 'Esta página fue diseñada y desarrollada por Jorge Luis Tambley Gomez.'
          : 'This page was designed and developed by Jorge Luis Tambley Gomez.'}
      </p>
      <NavLink to="/Policy" className={styles.link}>
        {lenguaje === 'ES' ? 'Política y Privacidad' : 'Privacy Policy'}
      </NavLink>
    </div>
  );
}

export default Footer;
