import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter/CounterReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
