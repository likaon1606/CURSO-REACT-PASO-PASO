import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modelo from "./reyes/Modelo";
import Nav from "./Nav";
import Error404 from "./reyes/Error404";
import Home from "./reyes/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/reyes/:rey' element={<Modelo />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
