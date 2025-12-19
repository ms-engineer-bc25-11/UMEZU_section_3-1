import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header wrapper">
            <div className="logo">毎日のかけいぼ</div>

            <nav>
                <ul className="main-nav">
                    <li><Link to="/"> Home </Link></li>
                </ul>
            </nav>
        </header>
    );
};