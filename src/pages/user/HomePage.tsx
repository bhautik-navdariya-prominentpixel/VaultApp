import { Eye, EyeOff, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { getFormattedRuppies } from "../../utils/utils";
import { useSelector } from "react-redux";
import type { StoreType } from "../../store";
import { Link } from "react-router-dom";
import TransactionList from "../../components/Transaction/TransactionList";
import { getUserByIdApi } from "../../api/UserApi";

export default function BankingApp() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const currentUser = useSelector((store: StoreType) => store.auth.user);
  const [currentBalance, setCurrentBalance] = useState<number>(currentUser.balance);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  useEffect(()=>{
    getUserByIdApi(currentUser.id).then((user)=>{
      setCurrentBalance(user.balance);
    })
  }, [])
  return (
    <div className='max-w-7xl mx-auto px-6 py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left Column - Balance & Actions (Mobile full width, Desktop 2 columns) */}
        <div className='lg:col-span-2'>
          {/* Welcome Section */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold mb-2'>Hello, {currentUser.firstName}</h1>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              Here's your financial overview
            </p>
          </div>

          {/* Balance Card */}
          <div className='mb-8'>
            <div className='bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 text-white border-none'>
              <div className='flex justify-between items-start mb-6'>
                <div>
                  <p className='text-blue-100 text-sm mb-2'>Available Balance</p>
                  <div className='flex items-center gap-4'>
                    {isBalanceVisible ? (
                      <h2 className='text-4xl lg:text-5xl font-bold'>
                        {getFormattedRuppies(currentBalance)}
                      </h2>
                    ) : (
                      <h2 className='text-4xl lg:text-5xl font-bold'>••••••</h2>
                    )}
                    <button
                      onClick={toggleBalanceVisibility}
                      className='p-2 rounded-full hover:bg-white hover:text-black hover:bg-opacity-20 transition-colors'
                    >
                      {isBalanceVisible ? (
                        <EyeOff className='w-6 h-6' />
                      ) : (
                        <Eye className='w-6 h-6' />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className='text-blue-100 text-sm mb-2'>Account No.</p>
                  <div className='flex items-center gap-4'>
                    <h2 className='font-bold'>{currentUser.accountNo}</h2>
                  </div>
                </div>
                {/* <CreditCard className='w-10 h-10 text-blue-200' /> */}
              </div>

              <div className='flex gap-4 mt-8'>
                <Link
                  to={"transfer"}
                  className='flex-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-opacity-30 transition-colors'
                >
                  <Send className='w-6 h-6' />
                  <span className='font-semibold text-lg text-slate-800'>Transfer Money</span>
                </Link>
                {/* <button className='flex-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-opacity-30 transition-colors'>
                  <Download className='w-6 h-6' />
                  <span className='font-semibold text-lg text-slate-800'>Request Money</span>
                </button> */}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          {/* <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
            <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>This Month</p>
                  <p className='text-2xl font-bold text-green-600'>+$2,350</p>
                </div>
                <ArrowUpRight className='w-8 h-8 text-green-600' />
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Expenses</p>
                  <p className='text-2xl font-bold text-red-600'>-$1,240</p>
                </div>
                <ArrowDownLeft className='w-8 h-8 text-red-600' />
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Savings</p>
                  <p className='text-2xl font-bold text-blue-600'>$8,450</p>
                </div>
                <CreditCard className='w-8 h-8 text-blue-600' />
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Column - Transaction History (Desktop sidebar, Mobile full width) */}
        <div className='lg:col-span-1'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='text-xl font-semibold'>Recent Transactions</h3>
            <Link
              to={"/user/transactions"}
              className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors'
            >
              See all
            </Link>
          </div>

          <TransactionList type='PARTIAL' />
        </div>
      </div>

      {/* Bottom spacing */}
      <div className='h-8'></div>
    </div>
  );
}
