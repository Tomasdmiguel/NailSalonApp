import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {
 
  return (
    <nav className={styles.navbar}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Turnos Online</h1>
    </div>
    <ul>
      <li>
        <Link to="/inicio">Inicio</Link>
      </li>
      <li>
        <Link to="/turnos">Turnos</Link>
      </li>
      <li>
        <Link to="/crearturno">Sacar Turno</Link>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;
