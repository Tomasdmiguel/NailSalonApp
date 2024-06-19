import { configureStore } from "@reduxjs/toolkit";
import { turnoSlice } from "./Reducer.js";

const store = configureStore({
  reducer: {
    turnos: turnoSlice.reducer,
  },
});

export default store;
