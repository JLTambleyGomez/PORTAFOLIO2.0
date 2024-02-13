/* eslint-disable react-hooks/exhaustive-deps */
import './3d.css';
import { useState, useEffect } from "react";


const Cube = () => {
    const [cube, setCube] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCube(prevCube => (prevCube % 3) + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [cube]); 


  return (
    <div className="contain3d">
    {cube===1 &&
    <div className="cube">
      <div className="face front"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829666/Portafolio/nodejs_y5jq7s.png"></img></div>
      <div className="face back"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829803/Portafolio/express_cxf8sw.png"></img></div>
      <div className="face top"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829954/Portafolio/PYTHON_vxls9o.png"></img></div>
      <div className="face bottom"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829666/Portafolio/nodejs_y5jq7s.png"></img></div>
      <div className="face left"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829954/Portafolio/PYTHON_vxls9o.png"></img></div>
      <div className="face right"><img className="posgres" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829870/Portafolio/postgresql_lsqhh1.png"></img></div>
    </div>}
    {cube===2 &&
    <div className="cube">
      <div className="face front"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830467/Portafolio/APIREST_k8fnqf.png"></img></div>
      <div className="face back"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830466/Portafolio/WS_t4pszo.png"></img></div>
      <div className="face top"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829954/Portafolio/PYTHON_vxls9o.png"></img></div>
      <div className="face bottom"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829666/Portafolio/nodejs_y5jq7s.png"></img></div>
      <div className="face left"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830465/Portafolio/CLOUDINARY_xclpkc.png"></img></div>
      <div className="face right"><img className="posgres" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830462/Portafolio/NM_daf1gw.png"></img></div>
    </div>}
    
    {cube===3 &&
    <div className="cube">
      <div className="face front"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830463/Portafolio/2FA_adu7xv.png"></img></div>
      <div className="face back"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830470/Portafolio/VISA_g5ri21.png"></img></div>
      <div className="face top"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829954/Portafolio/PYTHON_vxls9o.png"></img></div>
      <div className="face bottom"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707829666/Portafolio/nodejs_y5jq7s.png"></img></div>
      <div className="face left"><img className="msk" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830469/Portafolio/MMSK_wfsehh.png"></img></div>
      <div className="face right"><img className="nodejs" src="https://res.cloudinary.com/ddectuilp/image/upload/v1707830461/Portafolio/MP_byjr5m.png"></img></div>
    </div>}
    

    </div>
  );
}

export default Cube;
