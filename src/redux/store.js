import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
