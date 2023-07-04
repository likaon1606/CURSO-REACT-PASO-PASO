import React, { useState, useEffect } from "react";

const Actividad1 = () => {
  const [chiste, setChiste] = useState("");

  const cambiar = () => {
    const url = "https://api.chucknorris.io/jokes/random";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => setChiste(lectura.value));
  };

  useEffect(() => {
    cambiar();
  }, []);

  return (
    <>
      <h1>Actividad1: </h1>
      <div>
        <p>{chiste}</p>
        <button onClick={cambiar}>Cambiar</button>
      </div>
    </>
  );
};

export default Actividad1;
