import { createSlice } from "@reduxjs/toolkit";
import users from "../db/users_db";

const initialState = {
  users: users,
  authorized: false,
  userDetails: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      const { enteredLogin, enteredPassword } = action.payload;
      const authorizedUser = state.users.find(
        (user) =>
          user.username === enteredLogin && user.password === enteredPassword
      );
      if (authorizedUser) {
        state.authorized = true;
        state.userDetails = authorizedUser;
      }
    },
    logout: (state) => {
      state.authorized = false;
      state.userDetails = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
