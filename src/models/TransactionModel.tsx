import { object } from "yup";
import * as Yup from "yup";
import { getId } from "../utils/utils";

export class TransactionModel {
  id: string = getId();
  senderAccount: string = "";
  reciverAccount: string = "";
  reciverId: string = "";
  senderId: string = "";
  amount: number = 0;
  note: string = "";
  transactionType: "CREDIT" | "DEBIT" = "DEBIT";
  transactionDate: Date = new Date();
}

export const TransactionModelValidator = object({
  // reciverAccount: Yup.string().required().min(11).max(11),
  amount: Yup.number().required()
    .min(1, "Can not send Money Below 1")
    .max(100000, "Can Not Send Money Above 1 Lac"),
});
