import React, { useState } from "react";
import axios from "axios";
import { validateEmptyFields } from "../../helpers/validate";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const CrearTurno = () => {
  const userId = useSelector((state) => state.turnos.user?.id);
  const navigate = useNavigate();
  const [turno, setTurno] = useState({
    date: "",
    time: "",
  });

  const handelInputChange = (event) => {
    const { value, name } = event.target;
    setTurno({
      ...turno,
      [name]: value,
    });
  };




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmptyFields(Object.values(turno))) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log(userId)
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date: turno.date,
          time: turno.time,
          userid: userId,
          
        }
      );

      if (response.status === 201) {
        alert("¡Turno creado exitosamente!");
        navigate("/turnos");
      }
    } catch (error) {
      console.error("Error al crear el turno:", error);
      alert("Error al crear el turno. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Saca tu turno para manicura</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={turno.date}
            onChange={handelInputChange}
            name="date"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            value={turno.time}
            onChange={handelInputChange}
            name="time"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Crear Turno</button>
        </div>
      </form>
    </div>
  );
};

export default CrearTurno;
