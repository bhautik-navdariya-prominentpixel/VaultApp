import api from ".";
import type { TransactionModel } from "../models/TransactionModel";
import { convertFirebaseObject } from "../utils/utils";

export const transferMoneyApi = async (
  transactionObject: TransactionModel,
  currentAmount: number
) => {
  try {
    //sender
    const apiRequestForReciverId = await api.get(`users.json`, {
      params: {
        orderBy: `"accountNo"`,
        equalTo: `"${transactionObject.reciverAccount}"`,
      },
    });
    if (Object.keys(apiRequestForReciverId.data).length === 0) {
      throw "No Acount Found!";
    }
    transactionObject.reciverId = Object.keys(apiRequestForReciverId.data)[0];
    const reciverBalance = apiRequestForReciverId.data[transactionObject.reciverId].balance;

    const addAccountTransactionLog = await api.post(
      `users/${transactionObject.senderId}/transaction.json`,
      transactionObject
    );
    if (addAccountTransactionLog.status != 200) {
      throw "Somthing Went Wrong!";
    }
    await api.patch(`users/${transactionObject.senderId}.json`, {
      balance: currentAmount - transactionObject.amount,
    });

    //// reciver
    transactionObject.transactionType = "CREDIT";
    const addAccountTransactionLogToReciver = await api.post(
      `users/${transactionObject.reciverId}/transaction.json`,
      transactionObject
    );
    if (addAccountTransactionLogToReciver.status != 200) {
      throw "Somthing Went Wrong!";
    }
    await api.patch(`users/${transactionObject.reciverId}.json`, {
      balance: reciverBalance + transactionObject.amount,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllTransactionApi = async (userId: string) => {
  try {
    const transactionRes = await api.get(`users/${userId}/transaction.json`, {
      params: {
        orderBy: `"transactionDate"`,
      },
    });
    // return res.data;
    return convertFirebaseObject<TransactionModel[]>(transactionRes.data);
  } catch (error) {
    throw error;
  }
};

export const getTop10TransactionApi = async (userId: string) => {
  try {
    const transactionRes = await api.get(`users/${userId}/transaction.json`, {
      params: {
        orderBy: `"transactionDate"`,
        limitToLast: 5,
      },
    });
    return convertFirebaseObject<TransactionModel[]>(transactionRes.data);
  } catch (error) {
    throw error;
  }
};
