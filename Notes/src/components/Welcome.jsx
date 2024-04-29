import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import { useContext } from 'react';
import "../styles/Welcome.css";
export default function Welcome() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

    return (
        <>
            <div className="welcome-wrapper">

                <div className="welcome">
                    <h3>This is the Welcome page!</h3>
                    <div>
                        {!isAuthenticated ? <Link to="/login">Login</Link> : null}
                        {!isAuthenticated ? <Link to="/register">Register</Link> : null}
                    </div>
                </div>
            </div>
        </>
    )
}