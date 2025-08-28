import { object } from "yup";
import * as Yup from "yup";

export class LoginModel {
  email: string = "";
  password: string = "";
  rememberMe: boolean = false;
}

export const LoginModelValidator = object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
