import type { UserModel } from "../models/UserModel";
const USER = "user";
const LOGIN = "login";
export function isLogin() {
  return localStorage.getItem(LOGIN) === "true";
}

export function getLoginUser(): UserModel {
  return JSON.parse(localStorage.getItem(USER) ?? "{}");
}

export function setUserLogin(user: UserModel): void {
  localStorage.setItem(USER, JSON.stringify(user));
  localStorage.setItem(LOGIN, true.toString());
}

export function logOutUser(): void{
  localStorage.clear();
}