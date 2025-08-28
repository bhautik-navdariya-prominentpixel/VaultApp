import api from ".";
import type { LoginModel } from "../models/LoginModel";
import type { SignUpModel } from "../models/SignUpModel";
import type { UserModel } from "../models/UserModel";
import { convertFirebaseObject } from "../utils/utils";

export const signUpUser = async (user: Partial<SignUpModel>) => {
  try {
    await api.post("users.json", user);
  } catch (error) {
    throw error;
  }
};

export const login = async (user: LoginModel) => {
  try {
    const res = await api.get(`users.json`, {
      params: {
        orderBy: `"email"`,
        equalTo: `"${user.email}"`,
      },
    });
    // return res.data;
    if (Object.keys(res.data).length === 0) {
      throw "Invalid Username or Password";
    }
    if(res.data[Object.keys(res.data)[0]].password != user.password){
      throw "Invalid Username or Password";
    }
    return convertFirebaseObject<UserModel[]>(res.data)[0];
  } catch (error) {
    throw error;
  }
};
