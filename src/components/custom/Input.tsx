import { ErrorMessage, Field } from "formik";

const Input = (props: {
  label: string;
  type: "text" | "password" | "email" | "file" | "number" | "checkbox";
  name: string;
  placeholder?: string;
  required?: boolean;
}) => {

  const CheckBoxType = (
    <>
      <Field
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className='w-4 h-4 accent-slate-800 dark:accent-slate-600 border border-gray-300 dark:border-gray-600 rounded'
      />
      <label htmlFor={props.name} className='text-slate-700 dark:text-slate-300 ms-1 text-sm'>
        {props.label}
      </label>
    </>
  );

  const NormalInputType = (
    <>
      <label className='block text-sm mb-1 text-slate-700 dark:text-slate-300'>
        {props.label}
        {props.required && <span className='text-red-600'> *</span>}
      </label>
      <Field
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className='w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-slate-600 outline-none dark:text-white'
      />
    </>
  );
  return (
    <div>
      {props.type === "checkbox" ? CheckBoxType : NormalInputType}
      <ErrorMessage className='text-red-600' component='div' name={props.name} />
    </div>
  );
};

export default Input;
