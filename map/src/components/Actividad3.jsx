import React from "react";

const Actividad3 = ({ reyes }) => {
  const resultado = reyes.find(
    (e) => e.nombre.substring(0, 1) === "a" || e.nombre.substring(0, 1) === "A"
  );

  return (
    <>
      <div>
        {resultado === undefined ? "No hay coincidencias" : resultado.nombre}
      </div>
    </>
  );
};

export default Actividad3;
