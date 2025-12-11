import { Link } from "react-router-dom";
import { transactions } from "../data/transactions";

export const Transactions = () => {
  return (
    <div>
      <h1>入出金一覧</h1>

      {transactions.map((t) => (
        <div 
          key={t.id} 
          style={{ border: "1px solid #ccc", margin: "12px 0", padding: "12px" }}
        >
          <p>内容：{t.title}</p>
          <p>金額：{t.amount}円</p>

          {/* 詳細ページへ遷移 */}
          <Link to={`/detail/${t.id}`}>履歴の詳細を見る</Link>
        </div>
      ))}
    </div>
  );
};