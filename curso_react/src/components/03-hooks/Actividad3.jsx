import React, { useState } from "react";
import "../../styles/actividad3.css";

const Actividad3 = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState();

  const sumar = () => {
    setResultado(Number(num1) + Number(num2));
  };

  const mod1 = (e) => {
    setNum1(e.target.value);
  };

  const mod2 = (e) => {
    setNum2(e.target.value);
  };

  return (
    <div className='caja'>
      <input type='number' value={num1} onChange={mod1} /> +
      <input type='number' value={num2} onChange={mod2} /> =
      <input type='number' readOnly value={resultado} />
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Actividad3;
