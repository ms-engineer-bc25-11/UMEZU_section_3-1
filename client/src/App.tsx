{/* App.tsxは「URL と 画面の対応表」だけを書く。Router, Routes, Route */}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";

import { Transactions } from "./pages/Transactions";
import { TransactionDetail } from "./pages/TransactionDetail";

const App: React.FC = () => {
  return (
    <Router>
        {/* ヘッダー */}
        <Header />
        
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
