import React, { useRef } from "react";

import "./eventos.css";

import image0 from "../../assets/rey_atanagildo.png";
import image1 from "../../assets/rey_sisebuto.png";

const Eventos = () => {
  const refCaja = useRef();

  const cambio = 23.16;

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
    }
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiar = (j) => {
    if (j.target.src.includes("atanagildo")) {
      j.target.src = image1;
    } else {
      j.target.src = image0;
    }
  };

  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  };

  return (
    <>
      <div ref={refCaja} className='caja' onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={image0} alt='' />
      </div>
      <input onChange={lectura} className='campo' />
    </>
  );
};

export default Eventos;
