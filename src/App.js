import { useState } from "react";
import Buscador from "./Components/Buscador";
import Crear from "./Components/Crear";
import Listado from "./Components/Listado";


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
     {/* cabecera del sitio */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
    </header>
   {/* barra de navegacion  */}
    <nav className="nav">
      <ul>
         <li><a href="/#">Inicio</a></li>
         <li><a href="/#">Peliculas</a></li>
         <li><a href="/#">Blog</a></li>
         <li><a href="/#">Contacto</a></li>
       </ul>
    </nav>

     {/* contenido principal  */}
    <section className="content">
          {/* aqui va el listado de  peliculas */}
        <Listado listadoState={listadoState}
               setListadoState={setListadoState}/>
        
    </section>
  {/* < Barra lateral */}
    <aside className="lateral">
       <Buscador 
        listadoState={listadoState}
        setListadoState={setListadoState}/>

        <Crear setListadoState={setListadoState}/>
    </aside>
      {/* pie de pagina */}
    <footer className="footer">
        &copy; MASTER EN JAVASCRIPT E12 y Typescript - <a href="https://victorrobles.es">victorrobles.es</a>
    </footer>
</div>
  );
}

export default App;
