import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { TransactionModel } from "../../models/TransactionModel";
import { getFormattedRuppies } from "../../utils/utils";

const TransactionCard = (props: { transaction: TransactionModel }) => {
  const IconComponent =
    props.transaction.transactionType == "CREDIT" ? ArrowDownLeft : ArrowUpRight;
  return (
    <>
      <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div
              className={`p-3 rounded-full ${
                props.transaction.transactionType === "CREDIT"
                  ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                  : "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
              }`}
            >
              <IconComponent className='w-5 h-5' />
            </div>
            <div>
              <p className='font-semibold'>{props.transaction.note}</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {new Date(props.transaction.transactionDate).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className='text-right'>
            <p
              className={`font-semibold ${
                props.transaction.transactionType === "CREDIT"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {props.transaction.transactionType === "CREDIT" ? "+" : "-"}
              {getFormattedRuppies(props.transaction.amount)}
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              {new Date(props.transaction.transactionDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
