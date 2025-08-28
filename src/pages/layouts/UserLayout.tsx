import { Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import { useSelector } from "react-redux";
import type { StoreType } from "../../store";
import { useEffect } from "react";

const UserLayout = () => {
  const authSlice = useSelector((store: StoreType) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authSlice.login) {
      if (!authSlice.user.isAdmin) {
        navigate("/");
      }
    }
  }, [authSlice]);
  
  return (
    <>
      <div className='min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'>
        <UserHeader />
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
