import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  appoiuserAppointments: [],
};

export const turnoSlice = createSlice({
  name: "turnos",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addUserAppointment: (state, action) => {
      state.appoiuserAppointments = state.appoiuserAppointments.concat(
        action.payload
      );
    },
    setUserAppointments: (state, action) => {
      state.appoiuserAppointments = action.payload;
    },
  },
});

export const { setUser, addUserAppointment, setUserAppointments } =
  turnoSlice.actions;
