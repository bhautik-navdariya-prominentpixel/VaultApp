"use client";
import { Field, Form, Formik } from "formik";
import Input from "../../components/custom/Input";
import { TransactionModel, TransactionModelValidator } from "../../models/TransactionModel";
import { useDispatch, useSelector } from "react-redux";
import type { StoreType } from "../../store";
import { transferMoneyApi } from "../../api/TransactionApi";
import { toast } from "react-toastify";
import { updateBalance } from "../../store/auth-slice";
import { Link, useNavigate } from "react-router-dom";
import { globalTostTheme } from "../../utils/tost-config";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

export default function SendMoneyPage() {
  const currentUser = useSelector((store: StoreType) => store.auth.user);
  const dispach = useDispatch();
  const navigate = useNavigate();
  const appTheme = useContext(ThemeContext);

  async function onFormSubmit(transaction: TransactionModel) {
    transaction.senderAccount = currentUser.accountNo;
    transaction.transactionType = "DEBIT";
    transaction.senderId = currentUser.id;
    if (currentUser.balance < transaction.amount) {
      toast.error("Not Enought Balance in Your Account!");
      return;
    }
    if (transaction.senderAccount == transaction.reciverAccount) {
      toast.error("Can Not Transfer Money in Same Account!");
      return;
    }
    try {
      await toast.promise(
        transferMoneyApi(transaction, currentUser.balance),
        {
          pending: "Transfering...",
          success: "Transfer Completed!",
        },
        { ...globalTostTheme, ...{ theme: appTheme } }
      );
      dispach(updateBalance(currentUser.balance - transaction.amount));
      navigate("/user/");
    } catch (e) {
      toast.error(e as string);
    }
  }
  return (
    <main className='p-6 flex justify-center'>
      <div className='w-full max-w-lg p-6 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow'>
        <h2 className='text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200'>
          New Transaction
        </h2>

        <Formik
          initialValues={new TransactionModel()}
          onSubmit={onFormSubmit}
          validationSchema={TransactionModelValidator}
        >
          <Form className='space-y-4'>
            {/* Account Number */}
            <div>
              <Input
                type='number'
                name='reciverAccount'
                placeholder='Enter recipient account no.'
                label='Account Number'
                required
              />
            </div>

            {/* Amount */}
            <div>
              <Input
                type='number'
                name='amount'
                label='Amount (₹)'
                placeholder='Enter amount'
                required
              />
            </div>

            {/* Note */}
            <div>
              <label
                htmlFor='note'
                className='block text-sm mb-1 text-slate-700 dark:text-slate-300'
              >
                Note (Optional)
              </label>
              <Field
                as='textarea'
                name='note'
                id='note'
                placeholder='Enter note'
                rows={3}
                className='w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-600 outline-none resize-none'
              />
            </div>

            {/* Action Buttons */}
            <div className='flex justify-end gap-4 pt-4'>
              <Link
                to={"/user/"}
                className='px-5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-slate-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              >
                Cancel
              </Link>
              <button
                type='submit'
                className='px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700'
              >
                Confirm
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
