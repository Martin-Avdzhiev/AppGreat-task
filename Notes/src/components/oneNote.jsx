import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getOneNote } from '../utils/fetchData';
export default function OneNote() {
    const [note, setNote] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        getOneNote(id).then(data => setNote(data));
    }, [])
    return (
        <div className="oneNote">
            <h2>{note?.title}</h2>
            <textarea value={note?.content} readOnly></textarea>
        </div>
    )
}