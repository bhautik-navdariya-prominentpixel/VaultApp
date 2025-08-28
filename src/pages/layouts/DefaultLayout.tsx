import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DefaultLayout = () => {
  return (
    <>
      <ToastContainer />
      <div className="bg-white dark:bg-gray-900">
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
