import "./App.css";
import Colores from "./components/Colores";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import { Datos } from "./contexto/Contexto";

function App() {
  return (
    <>
      <Datos>
        <div className='App'>
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
    </>
  );
}

export default App;
