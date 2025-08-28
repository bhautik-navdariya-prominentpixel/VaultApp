import api from ".";
import type { UserModel } from "../models/UserModel";
import { convertFirebaseObject } from "../utils/utils";

// export const signUpUser = async (user: Partial<SignUpModel>) => {
//   try {
//     await api.post("users.json", user);
//   } catch (error) {
//     throw error;
//   }
// };

export const getAllUserApi = async () => {
  try {
    const res = await api.get(`users.json`);
    // return res.data;
    if (Object.keys(res.data).length === 0) {
      throw "Somthing Went Wrong";
    }
    return convertFirebaseObject<UserModel[]>(res.data);
  } catch (error) {
    throw error;
  }
};

export const updateUserApi = async (userData:UserModel) => {
  try {
    const res = await api.put(`users/${userData.id}.json`, userData);
    // return res.data;
    if (Object.keys(res.data).length === 0) {
      throw "Somthing Went Wrong";
    }
    // return convertFirebaseObject<UserModel[]>(res.data);
  } catch (error) {
    throw error;
  }
};

export const getUserByIdApi = async (id:string) => {
  try {
    const res = await api.get(`users/${id}.json`);
    // return res.data;
    if (Object.keys(res.data).length === 0) {
      throw "Somthing Went Wrong";
    }
    return (res.data);
  } catch (error) {
    throw error;
  }
};


export const deleteUserByIdApi = async (id:string) => {
  console.log(id);
  
  try {
    const apiResponse = await api.delete(`users/${id}.json`);
    
    if(apiResponse.status != 200){
        throw "Somthing Went Wrong!"
    }
  } catch (error) {
    throw error;
  }
};