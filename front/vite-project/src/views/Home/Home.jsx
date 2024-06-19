import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Bienvenido!</h1>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <Login />
        </div>
        <div className={styles.formWrapper}>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Home;
