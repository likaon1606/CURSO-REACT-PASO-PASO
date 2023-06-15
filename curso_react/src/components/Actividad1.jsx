import React from "react";
import "../styles/myCss.css";

import image0 from "../assets/rey_sisebuto.png";
import image1 from "../assets/rey_leogivildo.png";
import image2 from "../assets/rey_atanagildo.png";
import rey from "../assets/rey_incognito.png";

const Actividad1 = () => {
  const nombres = ["Atanagildo", "Leogivildo", "Sisebuto"];

  const changeText = (e) => {
    if (e.target.innerHTML === "Visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    }
  };

  const changeImg = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.src = rey;
    }
    e.target.parentNode.style.backgroundColor = "white";
  };

  return (
    <div className='container'>
      <div className='box'>
        <img src={image0} alt='' onClick={changeImg} />
        <div className='nombre' onClick={changeText}>
          {nombres[0]}
        </div>
      </div>
      <div className='box'>
        <img src={image1} alt='' onClick={changeImg} />
        <div className='nombre' onClick={changeText}>
          {nombres[1]}
        </div>
      </div>
      <div className='box'>
        <img src={image2} alt='' onClick={changeImg} />
        <div className='nombre' onClick={changeText}>
          {nombres[2]}
        </div>
      </div>
    </div>
  );
};

export default Actividad1;
