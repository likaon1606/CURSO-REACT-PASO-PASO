import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegacion = useNavigate();
  const login = () => {
    navegacion("/", { replace: true }); // replace es para NO almacenar la página anterior
  };

  return (
    <>
      {" "}
      <h1>Pantalla de Login</h1>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
