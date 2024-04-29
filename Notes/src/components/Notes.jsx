import "../styles/AllNotes.css";
import { useEffect, useState } from "react";
import { getAllNotes,updateNote,deleteNote } from "../utils/fetchData";
import {Link} from 'react-router-dom';
export default function AllNotes() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getAllNotes().then(data => setNotes(data));
    })

    return (
        <>
            <div className="notes">
                {notes.length > 0 ? notes.map(note => <div key={note._id}>
                    <h2>{note.title}</h2>
                    <Link to={"/notes/" + note._id}>Read More</Link>
                    <p>{note.content}</p>
                    <button>Edit</button>
                    <button onClick={()=>deleteNote(note._id)}>Delete</button>
                </div>
                ) : null}
            </div>
        </>
    )
}