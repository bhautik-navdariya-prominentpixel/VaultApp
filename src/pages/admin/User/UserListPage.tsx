import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import type { UserModel } from "../../../models/UserModel";
import { deleteUserByIdApi, getAllUserApi } from "../../../api/UserApi";
import { Link } from "react-router-dom";
import Loading from "../../../components/custom/Loading";
import { toast } from "react-toastify";
import { globalTostTheme } from "../../../utils/tost-config";
import { getFormattedRuppies } from "../../../utils/utils";
import { Info, Pen, Plus, Trash2 } from "lucide-react";
import { ThemeContext } from "../../../contexts/theme-context";

const UserListPage = () => {
  const [usersData, setUsersData] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const appTheme = useContext(ThemeContext);
  useEffect(() => {
    getAllUserApi().then((user) => {
      setUsersData(user);
      setIsLoading(false);
    });
  }, []);
  async function deleteUser(id: string) {
    if (confirm("Are You Sure?")) {
      await toast.promise(deleteUserByIdApi(id), {
        pending: "Deleting User...",
        success: "User Deleted Successfully!",
        error: "Failed to Delete User",
      },  { ...globalTostTheme, ...{ theme: appTheme } });
      setUsersData(usersData.filter((user) => user.id !== id));
    }
  }
  const columns: any = [
    {
      name: "UID",
      selector: (row: UserModel) => row.id,
    },
    {
      name: "Full Name",
      selector: (row: UserModel) => row.firstName + " " + row.lastName,
    },
    {
      name: "Email",
      selector: (row: UserModel) => row.email,
    },
     {
      name: "Balance",
      selector: (row: UserModel) => getFormattedRuppies(row.balance),
    },
    {
      name: "Role",
      selector: (row: UserModel) =>
        row.isAdmin ? (
          <span className='px-3 py-1 rounded-full text-xs font-semibold bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200'>
            Admin
          </span>
        ) : (
          <span className='px-3 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200'>
            User
          </span>
        ),
    },
    {
      name: "AccountNo",
      selector: (row: UserModel) => row.accountNo,
    },
    {
      name: "Action",
      selector: (row: UserModel) => (
        <div className='flex gap-2'>
          <Link
            to={row.id}
            className='px-3 py-3 border rounded-4xl hover:bg-yellow-600 hover:text-white text-yellow-600 text-sm shadow duration-500'
          >
           <Pen size={18}/>
          </Link>
          <button
            className='px-3 py-3 cursor-pointer border rounded-4xl hover:bg-red-600 hover:text-white text-red-600 text-sm shadow duration-500'
            onClick={() => deleteUser(row.id)}
          >
            <Trash2 size={18}/>
          </button>
          <Link to={`${row.id}/transactions`} className='px-3 py-3 border rounded-4xl hover:bg-green-600 hover:text-white text-green-600 text-sm shadow duration-500'>
            <Info size={18}/>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6'>
        <div className='max-w-7xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md'>
          <div className='flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700'>
            <h2 className='text-xl font-semibold text-slate-800 dark:text-slate-200'>
              User Management
            </h2>
            <Link
              to='new'
              className='px-4 py-2 rounded-lg bg-slate-800 dark:bg-slate-600 text-white hover:opacity-90 transition flex gap-2'
            >
              <Plus /> Add User
            </Link>
          </div>

          <div className='overflow-x-auto'>
            <DataTable
              columns={columns}
              data={usersData}
              pagination
              highlightOnHover
              striped
              responsive
              progressComponent={<Loading />}
              progressPending={isLoading}
              theme={appTheme}
              // expandableRows
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
