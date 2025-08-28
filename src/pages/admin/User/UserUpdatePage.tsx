import { useParams } from "react-router-dom";
import UserForm from "../../../components/UserForm";
import { useEffect, useState } from "react";
import { SignUpModel } from "../../../models/SignUpModel";
import { getUserByIdApi } from "../../../api/UserApi";
import Loading from "../../../components/custom/Loading";

const UserUpdate = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<SignUpModel>(new SignUpModel());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserByIdApi(id ?? "").then((userData) => {
      setUserData(userData);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading && (
        <div className='py-20'>
          <Loading />
        </div>
      )}
      {!isLoading && <UserForm type='UPDATE' userData={userData} id={id} />}
    </>
  );
};

export default UserUpdate;
