import { useState } from "react"
import useForm from "../../hooks/useForm"
export default function Register() {
    const registerSubmitHandler = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    };
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        password: '',
        repeatPassword: ''
    })
    return (
        <div>
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