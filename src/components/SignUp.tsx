import { Form, Formik } from "formik";
import Input from "./custom/Input";
import { SignUpModel, SignUpModelValidator } from "../models/SignUpModel";
import { signUpUser } from "../api/authanticationApi";
import { toast } from "react-toastify";
import { globalTostTheme } from "../utils/tost-config";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const appTheme = useContext(ThemeContext);
  async function onSubmitForm(signUpData: SignUpModel) {
    await toast.promise(
      signUpUser(signUpData),
      {
        pending: "Sign Up user...",
        success: "User Sign Up Successfully!",
        error: "Failed to create user!",
      },
      { ...globalTostTheme, ...{ theme: appTheme } }
    );
    navigate("/");
  }
  return (
    <div className='w-full max-w-2xl'>
      <div className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-8'>
        <h2 className='text-2xl font-semibold text-center mb-6 text-slate-900 dark:text-slate-200'>
          Create Your Account
        </h2>

        {/* Formik Signup Form */}
        <Formik
          initialValues={new SignUpModel()}
          validationSchema={SignUpModelValidator}
          onSubmit={onSubmitForm}
        >
          {() => (
            <Form className='space-y-5'>
              {/* Row 1: First & Last Name */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='First Name'
                  type='text'
                  name='firstName'
                  placeholder='John'
                  required
                />
                <Input label='Last Name' type='text' name='lastName' placeholder='Doe' required />
              </div>

              {/* Row 2: Email */}
              <Input
                label='Email'
                type='email'
                name='email'
                placeholder='you@example.com'
                required
              />

              {/* Row 3: Mobile */}
              <Input
                label='Mobile Number'
                type='number'
                name='mobile'
                placeholder='9876543210'
                required
              />

              {/* Row 4: PAN Number */}
              <Input
                label='PAN Card Number'
                type='text'
                name='pan'
                placeholder='ABCDE1234F'
                required
              />

              {/* Row 5: Password & Confirm Password */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='Password'
                  type='password'
                  name='password'
                  placeholder='********'
                  required
                />
                <Input
                  label='Confirm Password'
                  type='password'
                  name='confirmPassword'
                  placeholder='********'
                  required
                />
              </div>
              <div className='flex items-center space-x-2'>
                <Input
                  type='checkbox'
                  name='acceptTerms'
                  label='I accept the Privacy Policy & Terms'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full py-3 rounded-xl bg-slate-800 dark:bg-slate-600 hover:opacity-90 text-white font-semibold transition'
              >
                Sign Up
              </button>

              {/* Already have account */}
              <p className='text-center text-sm mt-6 text-slate-600 dark:text-slate-400'>
                Already have an account?{" "}
                <Link
                  to='/'
                  className='text-slate-800 dark:text-slate-300 font-medium hover:underline'
                >
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
