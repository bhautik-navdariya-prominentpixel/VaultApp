import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import type { StoreType } from "../../store";
import { getLoginUser, isLogin } from "../../utils/auth-util";
import { loginUser } from "../../store/auth-slice";

const AuthLayout = () => {
  const authSlice = useSelector((store:StoreType)=>store.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(authSlice.login){
      if(authSlice.user.isAdmin){
        navigate("/admin/");
      }else{
        navigate("/user/")
      }
    }else{
      if(isLogin()){
        dispatch(loginUser(getLoginUser()));
      }
    }
  }, [authSlice])
  return <Outlet />
};

export default AuthLayout;
