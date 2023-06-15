import React from "react";

const Cena = ({ nombre, precio, color, setTotal }) => {
  const ruta = "http://www.html6.es/img/rey_";
  const imagen = `${ruta}${nombre.toLowerCase()}.png `;

  const comprar = (elemento) => {
    setTotal((e) => e + precio);
    elemento.target.parentNode.parentNode.parentNode.style.display = "none";
  };

  return (
    <>
      <div className='rey' style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>
        <img src={imagen} alt='rey' />
        <div className='titulo'>Precio:</div>
        <div className='precio'>
          {precio}$
          <div>
            <button onClick={comprar}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cena;
