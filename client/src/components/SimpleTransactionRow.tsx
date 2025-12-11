import { Transaction } from "../types";

type Props = {
  transaction: Transaction;
};

export const SimpleTransactionRow = ({ transaction }: Props) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <strong>{transaction.title}</strong>
      <span> / {transaction.amount}円</span>
    </div>
  );
};