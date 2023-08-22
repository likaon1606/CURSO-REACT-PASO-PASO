const Destino = ({ nombre, imagen, situacion }) => {
  const ruta = `/images/${imagen}`;

  return (
    <>
      <div className='destino'>
        <div className='nombre'>{nombre}</div>
        <div className='situacion'>{situacion}</div>
        <img src={ruta} alt='' />
      </div>
    </>
  );
};

export default Destino;
