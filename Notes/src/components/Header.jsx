import "../styles/Header.css";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import { useContext } from 'react';
export default function Header() {
    const {
        username,
        isAuthenticated,
        logoutSubmitHandler
    } = useContext(AuthContext);
    return (
        <div className="header">
            <header>
                <Link to={"/"}>{!isAuthenticated ? "Welcome" : username}</Link>
                <nav>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </nav>
            </header>
        </div>
    )
}