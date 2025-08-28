import { Form, Formik } from "formik";
import { SignUpModel, SignUpModelValidator } from "../models/SignUpModel";
import { signUpUser } from "../api/authanticationApi";
import { toast } from "react-toastify";
import { globalTostTheme } from "../utils/tost-config";
import { useNavigate } from "react-router-dom";
import Input from "../components/custom/Input";
import { updateUserApi } from "../api/UserApi";

const UserForm = (props: { type: "INSERT" | "UPDATE"; userData?: SignUpModel; id?: string }) => {
  const navigate = useNavigate();
  async function onSubmitForm(signUpData: SignUpModel) {
    if (props.type == "INSERT") {
      await toast.promise(
        signUpUser(signUpData),
        {
          pending: "Adding user...",
          success: "User Added Successfully!",
          error: "Failed to add user!",
        },
        globalTostTheme
      );
      navigate("/admin/users");
    } else {
      await toast.promise(
        updateUserApi({ ...signUpData, ...{ id: props.id ?? "" } }),
        {
          pending: "Updating user...",
          success: "User Update Successfully!",
          error: "Failed to Update user!",
        },
        globalTostTheme
      );
      navigate("/admin/users");
    }
  }
  return (
    <div className='flex flex-1 justify-center items-center'>
      <div className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-8 w-7xl'>
        <h2 className='text-2xl font-semibold text-center mb-6 text-slate-900 dark:text-slate-200'>
          {props.type === "INSERT" ? "Add New" : "Update"} User
        </h2>

        {/* Formik Signup Form */}
        <Formik
          initialValues={{ ...new SignUpModel(), ...props.userData, ...{ acceptTerms: true } }}
          validationSchema={SignUpModelValidator}
          onSubmit={onSubmitForm}
        >
          {() => (
            <Form className='space-y-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Row 1: First & Last Name */}
                <div className='grid gap-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                      label='First Name'
                      type='text'
                      name='firstName'
                      placeholder='John'
                      required
                    />
                    <Input
                      label='Last Name'
                      type='text'
                      name='lastName'
                      placeholder='Doe'
                      required
                    />
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
                </div>
                <div className='grid gap-4'>
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
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                      type='number'
                      name='balance'
                      label={props.type === "INSERT" ? "Initial Balance" : "Balance"}
                    />
                    <Input type='checkbox' name='isAdmin' label='Admin' />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className='flex flex-row-reverse'>
                <button
                  type='submit'
                  className='py-3 px-5 rounded-xl bg-slate-800 dark:bg-slate-600 hover:opacity-90 text-white font-semibold transition'
                >
                  {props.type === "INSERT" ? "Add New" : "Update"} User
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
