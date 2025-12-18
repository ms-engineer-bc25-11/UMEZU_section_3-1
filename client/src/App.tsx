import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";

import { Transactions } from "./pages/Transactions";
import { TransactionDetail } from "./pages/TransactionDetail";

const App: React.FC = () => {
  return (
    <Router>
        {/* ナビゲーションバー */}
        <nav>
          <ul className="main-nav">
            <li><Link to="/"> Home </Link></li>
          </ul>
        </nav>
        
      <Routes>
        {/* 一覧（トップページ） */}
        <Route path="/" element={<Transactions />} />

        {/* 詳細ページ */}
        <Route path="/detail" element={<TransactionDetail />} />

      </Routes>
    </Router>
  );
};

export default App;
