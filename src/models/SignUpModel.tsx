import { object } from "yup";
import * as Yup from "yup";
import { getId } from "../utils/utils";

export class SignUpModel {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  mobile: string = "";
  pan: string = "";
  isAdmin:boolean = false;
  acceptTerms: boolean = false;
  accountNo: string = getId();
  createdDate: Date = new Date();
  balance: number = 0;
}

export const SignUpModelValidator = object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message: "Minimum eight characters, at least one letter and one number.",
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Passwords must match with password")
    .required("Confirm Password is required"),
  mobile: Yup.string().max(10).min(10).required(),
  pan: Yup.string().required(),
  acceptTerms: Yup.boolean().oneOf([true], "Term and Condition must be accepted before Sign up")
});
