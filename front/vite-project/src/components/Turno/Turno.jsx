import React from "react";
import styles from "./Turno.module.css";

const Turno = ({ id, date, time, status, onCancel }) => {
  const handleCancelClick = () => {
    onCancel(id);
  };

  return (
    <div
      className={`${styles.turnoContainer} ${
        status === "cancelled" ? styles.cancelado : ""
      }`}>
      <h2 className={styles.turnoTitle}>Turno</h2>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>

      {status === "active" && (
        <button onClick={handleCancelClick}>Cancelar</button>
      )}
    </div>
  );
};

export default Turno;
