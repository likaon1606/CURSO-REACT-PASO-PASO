import { useParams } from "react-router-dom";

const Modelo = () => {
  const { rey } = useParams();
  const reyCompleto =
    rey.substring(0, 1).toUpperCase() + rey.substring(1).toLowerCase();

  return (
    <div>
      <img src={`https://www.html6.es/img/rey_${rey}.png`} alt='' />
      <h1>{reyCompleto}</h1>
    </div>
  );
};

export default Modelo;
