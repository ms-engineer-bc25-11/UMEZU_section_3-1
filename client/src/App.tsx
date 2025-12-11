import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

import { Transactions } from "./pages/Transactions";
import { TransactionDetail } from "./pages/TransactionDetail";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">入出金一覧</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* 一覧（トップページ） */}
        <Route path="/" element={<Transactions />} />

        {/* 詳細ページ */}
        <Route path="/detail/:id" element={<TransactionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;