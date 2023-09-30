/* eslint-disable react/no-unescaped-entities */
import styles from "./Footer.module.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Politica = ()=>{
const lenguaje = useSelector((state)=>state.lenguaje)
const darkmode = useSelector((state)=>state.darkmode)

const containerStyle = {
    backgroundColor: darkmode ? "#000" : "#fff",
    transition: "all 0.5s",

  };  
if (lenguaje === "ES"){
  return(
    <div className={styles.container2} style={containerStyle}>
    
    <h2>Política de Privacidad de JobAppTracker</h2>
    <NavLink to="/home">Volver</NavLink>
    
            
    <h3>Fecha de entrada en vigencia: Agosto-2023</h3>
    <div>
        <h4>
    Bienvenido a JobAppTracker. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que proporcionas a través de nuestro sitio web. Al utilizar nuestro sitio, aceptas los términos de esta Política de Privacidad.
    </h4>
    <div>
    <h4>Información que Recopilamos</h4>
    Recopilamos información personal que nos proporcionas voluntariamente, como tu nombre, dirección de correo electrónico, fotografías y otra información necesaria para la creación y gestión de tu cuenta en JobAppTracker.
    </div>
    
    Uso de la Información
    Utilizamos la información personal que recopilamos para los siguientes fines:
    <li>
    Creación y gestión de cuentas de usuario.</li>
    <li>Guardar y  informacion sobre las postulaciones a trabajos de los usuarios
    </li>
    
    <li>Personalización de la experiencia del usuario en el sitio web.
    </li>
    <li>Mejora de nuestros servicios y contenido.
    </li>
    
    <h4>Cookies y Tecnologías Similares</h4>
    Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico del sitio y proporcionar contenido personalizado. Al utilizar nuestro sitio, aceptas el uso de cookies según lo establecido en nuestro Aviso de Cookies.
    
    Compartir Información con Terceros
    Podemos compartir información personal con proveedores de servicios de confianza que nos asisten en la operación de nuestro sitio web y la prestación de servicios. No vendemos ni alquilamos tu información a terceros con fines de marketing.
    
    Seguridad de Datos
    Tomamos medidas razonables para proteger tu información personal contra accesos no autorizados, pérdida y uso indebido. Sin embargo, ten en cuenta que ningún método de transmisión por internet o almacenamiento electrónico es completamente seguro.
    
    Derechos de los Usuarios
    Tienes derecho a acceder, corregir, eliminar y oponerte al procesamiento de tu información personal. Puedes ejercer estos derechos y obtener más información poniéndote en contacto con nosotros a través de la información de contacto proporcionada al final de esta Política de Privacidad.
    
    Cambios en esta Política
    Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cambios significativos a través de una notificación en nuestro sitio web. Los cambios entrarán en vigencia inmediatamente después de su publicación.
    
    Información de Contacto
    Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad, por favor contáctanos a través de jorgetambleygomez@gmail.com
    
    
            </div></div>
        )}
    


if (lenguaje==="EN"){
  return (
    <div className={styles.container2} style={containerStyle}>
      <h2>JobAppTracker Privacy Policy</h2>
      <NavLink to="/home">Back</NavLink>
  
      <h3>Effective Date: August 2023</h3>
      <div>
        <h4>
          Welcome to JobAppTracker. This Privacy Policy describes how we collect,
          use, and protect the personal information you provide through our
          website. By using our site, you agree to the terms of this Privacy
          Policy.
        </h4>
        <div>
          <h4>Information We Collect</h4>
          We collect personal information you voluntarily provide, such as your
          name, email address, photographs, and other information necessary for
          creating and managing your account on JobAppTracker.
        </div>
  
        <h4>Use of Information</h4>
        We use the personal information we collect for the following purposes:
        <ul>
          <li>Creation and management of user accounts.</li>
          <li>Saving and tracking users' job applications.</li>
          <li>Personalizing the user experience on the website.</li>
          <li>Improving our services and content.</li>
        </ul>
  
        <h4>Cookies and Similar Technologies</h4>
        We use cookies and similar technologies to enhance the user experience,
        analyze site traffic, and provide personalized content. By using our site,
        you agree to the use of cookies as set forth in our Cookie Notice.
  
        <h4>Sharing Information with Third Parties</h4>
        We may share personal information with trusted service providers who
        assist us in operating our website and providing services. We do not sell
        or rent your information to third parties for marketing purposes.
  
        <h4>Data Security</h4>
        We take reasonable measures to protect your personal information against
        unauthorized access, loss, and misuse. However, please note that no method
        of internet transmission or electronic storage is entirely secure.
  
        <h4>User Rights</h4>
        You have the right to access, correct, delete, and object to the
        processing of your personal information. You can exercise these rights and
        get more information by contacting us through the contact information
        provided at the end of this Privacy Policy.
  
        <h4>Changes to this Policy</h4>
        We reserve the right to update this Privacy Policy at any time. We will
        notify you of significant changes through a notification on our website.
        Changes will become effective immediately upon posting.
  
        <h4>Contact Information</h4>
        If you have questions, concerns, or requests related to this Privacy
        Policy, please contact us through jorgetambleygomez@gmail.com.
      </div>
    </div>
  );
  
    }
}

export default Politica