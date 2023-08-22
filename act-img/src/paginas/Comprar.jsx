import { Navigate, useNavigate, useParams } from "react-router-dom";
import data from "../datos/data";

const Comprar = () => {
  const { nombre } = useParams();
  const destinoEncontrado = data.find((dato) => dato.nombre === nombre);

  const navegacion = useNavigate();
  const volver = () => {
    navegacion(-1);
  };

  if (!destinoEncontrado) {
    return <Navigate to='/no' />;
  }

  const imagen = `/images/${destinoEncontrado.imagen}`;

  return (
    <>
      <h1>{nombre}</h1>
      <div className='servicios'>{destinoEncontrado.servicio}</div>
      <div className='precio'>{destinoEncontrado.precio}$</div>
      <div className='imagenGrande'>
        <img src={imagen} alt='' />
      </div>
      <button onClick={volver}>Volver</button>
    </>
  );
};

export default Comprar;
