import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";
import { logOutUser as logOutUserFromLocal } from "../utils/auth-util";

const initialState: {
  login: boolean;
  user: UserModel;
} = {
  login: false,
  user: new UserModel(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      state.login = true;
      return state;
    },
    logOutUser(state) {
      state.login = false;
      state.user = new UserModel();
      logOutUserFromLocal();
      return state;
    },
    updateBalance(state, action) {
      state.user.balance = action.payload;
      return state;
    },
  },
});

export default authSlice;
export const { logOutUser, loginUser, updateBalance } = authSlice.actions;
