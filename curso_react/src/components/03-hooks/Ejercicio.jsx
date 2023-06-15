import React, { useState } from "react";

const Ejercicio = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];

  const [contador, setContador] = useState(0);

  const [mensaje, setMensaje] = useState();

  const cambio = () => {
    setContador(contador + 1);
    if (contador + 1 >= reyesGodos.length) {
      setContador(0);
    }

    setMensaje(
      <h2>
        La afición principal de{" "}
        <span className='rojo' style={{ color: "red" }}>
          {reyesGodos[contador].nombre}
        </span>{" "}
        <span className='verde' style={{ color: "green" }}>
          {reyesGodos[contador].aficion}
        </span>
      </h2>
    );
  };

  return (
    <div>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </div>
  );
};

export default Ejercicio;
