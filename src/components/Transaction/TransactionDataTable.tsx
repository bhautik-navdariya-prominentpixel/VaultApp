import type { TransactionModel } from "../../models/TransactionModel";
import DataTable from "react-data-table-component";
import Loading from "../custom/Loading";
import { getFormattedRuppies } from "../../utils/utils";
const columns: any = [
  {
    name: "Transaction ID",
    selector: (row: TransactionModel) => row.id,
  },
  {
    name: "Note",
    selector: (row: TransactionModel) => row.note,
  },
  {
    name: "Reciver Account",
    selector: (row: TransactionModel) => row.reciverAccount,
  },
  {
    name: "Date",
    selector: (row: TransactionModel) => row.transactionDate,
  },
  {
    name: "Amount",
    selector: (row: TransactionModel) => getFormattedRuppies(row.amount),
  },
  {
    name: "Type",
    selector: (row: TransactionModel) =>
      row.transactionType === "CREDIT" ? (
        <span className='px-3 py-1 rounded-full text-xs font-semibold bg-green-200 text-black'>
          Credit
        </span>
      ) : (
        <span className='px-3 py-1 rounded-full text-xs font-semibold bg-red-300 text-black'>
          Debit
        </span>
      ),
  },
];
const TransactionDataTable = (props: { transactions: TransactionModel[]; isLoading: boolean }) => {
  return (
    <>
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6'>
        <div className='max-w-7xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md'>
          <div className='flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700'>
            <h2 className='text-xl font-semibold text-slate-800 dark:text-slate-200'>
              Transaction History
            </h2>
          </div>

          <div className='overflow-x-auto'>
            <DataTable
              columns={columns}
              data={props.transactions}
              pagination
              highlightOnHover
              striped
              responsive
              progressComponent={<Loading />}
              progressPending={props.isLoading}
              // theme="dark"
              // expandableRows
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDataTable;
