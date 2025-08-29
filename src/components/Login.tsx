import { Link, useNavigate } from "react-router-dom";
import Input from "./custom/Input";
import { Form, Formik } from "formik";
import { LoginModel, LoginModelValidator } from "../models/LoginModel";
import { login } from "../api/authanticationApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/auth-slice";
import { globalTostTheme } from "../utils/tost-config";
import { setUserLogin } from "../utils/auth-util";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const Login = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const appTheme = useContext(ThemeContext);

  async function onSubmitForm(user: LoginModel) {
    const loginResponse = await toast.promise(
      login(user),
      {
        pending: "Loading...",
        error: "Invalid Email or Password!",
        success: "Login Successfully!",
      },
      {...globalTostTheme, ...{theme: appTheme}}
    );
    dispach(loginUser(loginResponse));
    if (user.rememberMe) {
      setUserLogin(loginResponse);
    }
    if (loginResponse.isAdmin) {
      return navigate("/admin/");
    }
    return navigate("/user/");
  }
  return (
    <div className='w-full max-w-md'>
      <div className='bg-primary dark:bg-primary-dark border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-8'>
        <h2 className='text-2xl font-semibold text-center mb-6 text-slate-900 dark:text-slate-200'>
          Login to Your Account
        </h2>

        {/* Formik Login Form */}
        <Formik
          initialValues={new LoginModel()}
          onSubmit={onSubmitForm}
          validationSchema={LoginModelValidator}
        >
          {() => (
            <Form className='space-y-5'>
              {/* Email */}
              <Input
                label='Email'
                type='email'
                name='email'
                placeholder='you@example.com'
                required
              />

              {/* Password */}
              <Input
                label='Password'
                type='password'
                name='password'
                placeholder='********'
                required
              />

              {/* Remember me + Forgot password */}
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center space-x-2'>
                  <Input type='checkbox' name='rememberMe' label='Remember me' />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full py-3 rounded-xl bg-slate-800 dark:bg-slate-600 hover:opacity-90 text-white font-semibold transition'
              >
                Login
              </button>

              {/* Don't have account */}
              <p className='text-center text-sm mt-6 text-slate-600 dark:text-slate-400'>
                Don't have an account?{" "}
                <Link
                  to='/signup'
                  className='text-slate-800 dark:text-slate-300 font-medium hover:underline'
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
