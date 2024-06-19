import Home from "./views/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MisTurnos from "./views/MisTurnos/MisTurnos.jsx";
import Inicio from "./views/Inicio/Inicio.jsx";
import Contacto from "./views/Contacto/Contacto.jsx";
import CrearTurno from "./views/CrearTurno/CrearTurno.jsx";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/turnos" element={<MisTurnos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/crearturno" element={<CrearTurno/>}/>
      </Routes>
    </>
  );
}

export default App;
