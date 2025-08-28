import { useParams } from "react-router-dom";
import TransactionList from "../../../components/Transaction/TransactionList";

const UserTransactionPage = () => {
  const { userId } = useParams();
  return (
    <>
      <TransactionList type='FULL' userId={userId} />
    </>
  );
};

export default UserTransactionPage;
