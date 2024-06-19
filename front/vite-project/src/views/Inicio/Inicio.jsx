import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
      <main>
        <div className={styles.hero}>
          <h2>Bienvenido saca tu turno</h2>
          <p>Aquí puedes sacar tu turno online con la comodidad de hacerlo desde tu casa</p>
          <Link to="/crearturno">
           <button>Sacar turno</button>
          </Link>
        </div>


        <div className={styles.location}>
        <h2>¡Donde nos encontramos!</h2>
      
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9731955818015!2d-59.13621802331021!3d-37.31946260595145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f8e63529925%3A0x5dee673d85a7a028!2sAv.%20Col%C3%B3n%20992%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715630334729!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.contactButton}>
        <Link to="/contacto">
          <button>Nuestro contacto</button>
        </Link>
      </div>
      </main>
    );
  };
  
  export default Inicio;