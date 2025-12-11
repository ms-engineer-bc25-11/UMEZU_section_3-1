import { useParams } from "react-router-dom";
import { transactions } from '../data/transactions';

export const TransactionDetail = () => {
    const {id} = useParams();
    const transaction = transactions.find(t => t.id === Number(id));
    
    if (!transaction) {
        return <p>データがありません。</p>;
    }

        return (
        <div>
            <h1>取引詳細</h1>
            <p>ID: {transaction.id}</p>
            <p>内容: {transaction.title}</p>
            <p>金額: {transaction.amount}</p>
            <p>保有金融機関: {transaction.paymentMethod}</p>
            <p>入出金: {transaction.type}</p>
        </div>
    );
};