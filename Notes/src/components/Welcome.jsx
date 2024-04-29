import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import { useContext } from 'react';
export default function Welcome() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

    return (
        <>
            <div className="welcome">
                <h1>This is the Welcome page, you can go to login/register to start using the whole site!</h1>
                {!isAuthenticated ? <Link to="/login">Login</Link> : null}
                {!isAuthenticated ? <Link to="/register">Register</Link> : null}
            </div>
        </>
    )
}