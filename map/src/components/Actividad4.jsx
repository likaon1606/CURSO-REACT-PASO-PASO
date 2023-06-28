import React from "react";

const Actividad4 = ({ reyes }) => {
  const sumar = (e) => {
    ++e.target.innerHTML;
  };

  const resultado = reyes
    .filter((e) => e.reinado > 10 && e.vacasComidas > 10)
    .map((e) => (
      <div key={e.nombre}>
        {e.nombre}
        <div className='number' onClick={sumar}>
          0
        </div>
      </div>
    ));
  return <>{resultado}</>;
};

export default Actividad4;
