import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import { setUserAppointments } from "../../redux/Reducer";

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.turnos.user);
  const allTurnos = useSelector((state) => state.turnos.appoiuserAppointments);
  const userTurnos = allTurnos.filter((turno) => turno.userid === user?.id);

  const cancelarTurno = async (turnoId) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${turnoId}`);

      const updatedTurnos = allTurnos.map((turno) =>
        turno.id === turnoId ? { ...turno, status: "cancelled" } : turno
      );
      dispatch(setUserAppointments(updatedTurnos));
    } catch (error) {
      console.error("Error cancelando turno:", error);
    }
  };

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3000/appointments/")
        .then((res) => {
          dispatch(setUserAppointments(res.data));
        })
        .catch((error) => {
          console.error("Error  appointments:", error);
        });
    }
  }, [user, dispatch]);

  return (
    <div className={styles.misTurnosContainer}>
      <h1 className={styles.title}>Mis Turnos</h1>
      <div className={styles.turnosList}>
        {userTurnos.length > 0 ? (
          userTurnos.map((turno) => (
            <Turno
              {...turno}
              key={turno.id}
              onCancel={() => cancelarTurno(turno.id)}
            />
          ))
        ) : (
          <p>No hay turnos agendados.</p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;
