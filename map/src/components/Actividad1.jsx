import React from "react";

const Actividad1 = ({ reyes }) => {
  const url = "https://www.html6.es/img/rey_";

  const resultado = reyes.map((valor) => (
    <div key={valor.nombre} className='rey'>
      <span className='orange'>{valor.nombre.toUpperCase()}</span> a comido{" "}
      {valor.reinado * valor.vacasComidas * 365} vacas, en sus {valor.reinado}{" "}
      años de reinado.
      <img src={url + valor.nombre.toLowerCase() + ".png"} alt='rey' />
    </div>
  ));

  return <>{resultado}</>;
};

export default Actividad1;
