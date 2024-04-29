import "../styles/user/Auth.css";
import useForm from "../hooks/useForm";
import AuthContext from "../contexts/authContext";
import { createNote } from "../utils/fetchData";
import { useContext } from 'react';
export default function Note(){
    const {
        _id,
    } = useContext(AuthContext);
    const onSubmitHandler = async (values) => {
        console.log(_id)
        console.log(values)
        try {
            const request = await createNote(values.title,values.content,_id);
        } catch (error) {
            console.log(error.message)
        }

    }
    const { values, onChange, onSubmit } = useForm(onSubmitHandler, {
        title: "",
        content:""
    })
    return (
        <div className="auth">
        <form action="POST" onSubmit={onSubmit}>
            <label htmlFor="title" >Title</label>
            <input type="text" id="title" name="title" onChange={onChange} value={values.title} required />
            <label htmlFor="content">Content</label>
            <textarea type="text" id="content" name="content" onChange={onChange} value={values.content} required />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

