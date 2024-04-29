import "../../styles/user/Auth.css";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { useContext } from 'react';
export default function Login() {
    const {
        loginSubmitHandler,
    } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        username: '',
        password: '',
    })

    return (
        <div className="auth">
            <form action="POST" onSubmit={onSubmit}>
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" name="username" onChange={onChange} value={values.username} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}