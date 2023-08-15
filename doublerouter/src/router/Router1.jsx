import { Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";
import Recuperacion from "../paginas/Recuperacion";
import Router2 from "./Router2";

const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='recuperacion' element={<Recuperacion />} />
        <Route path='/*' element={<Router2 />} />
      </Routes>
    </>
  );
};

export default Router1;
