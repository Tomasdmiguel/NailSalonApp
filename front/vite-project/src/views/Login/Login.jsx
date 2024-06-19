import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Login.module.css";
import { setUser } from "../../redux/Reducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!loginData.username || !loginData.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        loginData
      );

      if (response.status === 200) {
        alert("¡Inicio de sesión exitoso!");
        dispatch(setUser(response.data.credentialsId.user));
        
        navigate("/inicio");
      } else {
        alert("Error: Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert(
        "Ha ocurrido un error durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde o revisa tus credenciales."
      );
    }
  };

  return (
    <div className={style.formContainer}>
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
