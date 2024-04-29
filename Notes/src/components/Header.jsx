import "../styles/Header.css";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import { useContext } from 'react';
export default function Header() {
    const {
        username,
        isAuthenticated,
        logoutSubmitHandler,
        _id
    } = useContext(AuthContext);
    return (
        <div className="header">
            <header>
                <Link to={"/"}>{!isAuthenticated ? "Welcome" : username}</Link>
                <Link to={"/notes"}>All Notes</Link>
                <nav>
                {isAuthenticated ? null : <Link to={"/login"}>Login</Link>}
                {isAuthenticated ? null : <Link to={"/register"}>Register</Link>}
                {isAuthenticated ? <Link to={`/notes/create/:${_id}`}>Create</Link> : null}
                {isAuthenticated ? <button onClick={logoutSubmitHandler}>Log Out</button> : null}
                </nav>
            </header>
        </div>
    )
}