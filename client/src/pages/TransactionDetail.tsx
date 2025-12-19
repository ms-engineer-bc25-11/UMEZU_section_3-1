import { transactions } from '../data/transactions';

export const TransactionDetail = () => {
    return (
        <div>
            <h1>入出金一覧（詳細）</h1>

        <table border={1}>
        <thead>
            <tr>
                <th>日付</th>
                <th>内容</th>
                <th>金額</th>
                <th>支払い元</th>
                <th>入出金</th>
            </tr>
        </thead> 
        
        <tbody>
            {transactions.map((t) => (
                <tr key={t.id}>
                    <td>{t.date}</td>
                    <td>{t.title}</td>
                    <td>{t.amount}円</td>
                    <td>{t.paymentMethod}</td>
                    <td>{t.type}</td>
            </tr>
        ))}
        </tbody>
        </table>
    </div>
    );
};