import React, { useEffect, useState } from "react";

//?............................
// LA API DE CHISTES ESTÁ OBSOLETA YA
//?..............,.............

const Actividad2 = () => {
  const [chiste, setChiste] = useState([]);

  const cambiar = () => {
    const url = "https://api.icndb.com/jokes";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) =>
        lectura.value.map((chistes) =>
          setChiste((e) => [
            ...e,
            <div className='ch' key={chistes.id}>
              {chistes.id} {chistes.joke}
            </div>,
          ])
        )
      )
      .catch(console.log);
  };

  useEffect(() => {
    cambiar();
  }, []);

  return <>{chiste}</>;
};

export default Actividad2;
