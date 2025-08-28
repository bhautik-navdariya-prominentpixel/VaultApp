import { useEffect, useState } from "react";
import type { TransactionModel } from "../../models/TransactionModel";
import { getAllTransactionApi, getTop10TransactionApi } from "../../api/TransactionApi";
import { useSelector } from "react-redux";
import type { StoreType } from "../../store";
import Loading from "../custom/Loading";
import TransactionCard from "./TransactionCard";
import TransactionDataTable from "./TransactionDataTable";

const TransactionList = (props: { type: "FULL" | "PARTIAL"; userId?: string }) => {
  const [transactionData, setTransactionData] = useState<TransactionModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userId = useSelector((store: StoreType) => store.auth.user.id);

  useEffect(() => {
    if (props.type === "FULL") {
      getAllTransactionApi(props.userId ?? userId).then((res) => {
        setTransactionData(res.reverse());
        setIsLoading(false);
      });
    } else {
      getTop10TransactionApi(props.userId ?? userId).then((res) => {
        setTransactionData(res.reverse());
        setIsLoading(false);
      });
    }
  }, []);
  return (
    <>
      <div className='space-y-4'>
        {isLoading && props.type === "PARTIAL" && (
          <div className='mt-5'>
            <Loading />
          </div>
        )}
        {!isLoading &&
          props.type === "PARTIAL" &&
          transactionData.map((transaction) => (
            <TransactionCard transaction={transaction} key={transaction.id} />
          ))}
        {props.type === "FULL" && (
          <TransactionDataTable isLoading={isLoading} transactions={transactionData} />
        )}
      </div>
    </>
  );
};

export default TransactionList;
