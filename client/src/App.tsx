import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

// 簡易的なコンポーネントを3つ定義
const Home: React.FC <{ name: string }> = ({ name }) => {
  return <h1>Home, {name}!</h1>;
 }; //コンポーネント　props渡してみる
const About: React.FC = () => <h1>About</h1>;　//コンポーネント
const Contact: React.FC = () => <h1>Contact</h1>;　//コンポーネント

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home name="あっぷー" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;