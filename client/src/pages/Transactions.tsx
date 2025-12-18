import { Link } from "react-router-dom";
import { transactions } from "../data/transactions";
import { Form } from "../components/Form";

export const Transactions = () => {
  return (
    <div className="container">
      <h1>入出金一覧</h1>

      <div className="table-wrapper">
        <table  
          style={{ 
            border: "1px solid #ccc", 
            margin: "12px 0", 
            padding: "12px"
          }}
        >
          <thead>
            <tr>
              <th>日付</th>
              <th>内容</th>
              <th>金額</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.title}</td>
            <td style={{ textAlign: "right"}}>
              {t.amount}円
              </td>
          </tr>
        ))}
      </tbody>

    </table>
          {/* 詳細ページへ遷移 */}
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <Link to="/detail">詳細を見る</Link>
        </div>
    </div>
  </div>
  );
};