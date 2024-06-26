import "../../styles/user/Auth.css";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { useContext } from 'react';

export default function Register() {
    const {
        registerSubmitHandler,
    } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        password: '',
        repeatPassword: ''
    })
    return (
        <div className="auth">
            <form action="POST" onSubmit={onSubmit}>
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" name="username" onChange={onChange} value={values.username} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" id="repeatPassword" name="repeatPassword" onChange={onChange} value={values.repeatPassword} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}