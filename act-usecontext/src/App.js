import "./App.css";
import Idiomas from "./components/Idiomas";
import Pagina from "./components/Pagina";
import Provider from "./contexto/Provider";

function App() {
  return (
    <Provider>
      <div className='banderas'>
        <Idiomas />
      </div>
      <div className='contenido'>
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
