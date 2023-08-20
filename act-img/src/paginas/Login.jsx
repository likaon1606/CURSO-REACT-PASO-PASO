import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../contexto/Context";

const Login = () => {
  const { logearse } = useContext(Context);
  const navegacion = useNavigate();
  const login = () => {
    logearse("jab");
    navegacion("/", { replace: true });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
