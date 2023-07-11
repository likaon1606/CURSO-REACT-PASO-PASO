import A from "./paginas/A";
import B from "./paginas/B";
import C from "./paginas/C";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Error404 from "./paginas/Error404";
import D from "./paginas/D";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<A />} />
        <Route path='/pagina2' element={<B />} />
        <Route path='/pagina3' element={<C />} />
        <Route path='/pagina4/:letra' element={<D />} />
        <Route path='/pagina1' element={<Navigate to='/' />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
