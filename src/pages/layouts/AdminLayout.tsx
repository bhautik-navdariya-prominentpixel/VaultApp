import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import type { StoreType } from "../../store";
import { useEffect } from "react";

const AdminLayout = () => {
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
      <div className='min-h-screen flex flex-col'>
        <AdminHeader />
        {/* <main className=''> */}
          <Outlet />
        {/* </main> */}
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
