import { useState } from "react";
import axios from "axios";
import { validateEmail, validateEmptyFields } from "../../helpers/validate";
import styles from "./Register.module.css";

const Register = () => {
  const [registro, setRegistro] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    password2: "",
  });
  console.log(registro);

  const handelInputChange = (event) => {
    const { value, name } = event.target;
    setRegistro({
      ...registro,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(registro.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!validateEmptyFields(Object.values(registro))) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (registro.password !== registro.password2) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }
    const { password2, ...registroToSend } = registro;

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        registroToSend
      );
      if (response.status === 201) {
        alert("¡Registro exitoso! Gracias por registrarte.");
      } else {
        alert(
          "Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Ya hay un usuario con este email."
      );
    }
  };
  return (
    <div className={styles.formContainer}>
      <h1>Registrar Usuario</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            onChange={handelInputChange}
            name="name"
            value={registro.name}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text"
            onChange={handelInputChange}
            name="email"
            value={registro.email}
            placeholder="Ejemplo@gmail.com"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input
            type="date"
            value={registro.birthdate}
            onChange={handelInputChange}
            name="birthdate"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="nDni">Número de DNI</label>
          <input
            type="text"
            onChange={handelInputChange}
            name="nDni"
            value={registro.nDni}
            placeholder="Ingresa tu número de DNI"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            value={registro.username}
            onChange={handelInputChange}
            name="username"
            placeholder="Elige un nombre de usuario"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            onChange={handelInputChange}
            name="password"
            value={registro.password}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password2">Repita la contraseña</label>
          <input
            type="password"
            onChange={handelInputChange}
            name="password2"
            value={registro.password2}
            placeholder="Ingresa tu contraseña nuevamente"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
