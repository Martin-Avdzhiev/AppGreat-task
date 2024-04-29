const API = 'http://localhost:3000/api';
const loginUser = async (username, password) => {
    try {
        const data = {
            username,
            password
        }
        const response = await fetch(`${API}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}
const registerUser = async (username, password, repeatPassword) => {
    console.log(username)
    try {
        const data = {
            username,
            password,
            repeatPassword
        }
        const response = await fetch(`${API}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const createNote = async (title, content, id) => {

    try {
        const data = {
            title,
            content
        }

        const response = await fetch(`${API}/notes/create/${id}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}


async function getAllNotes() {
    try {
        const notes = await fetch(`${API}/notes`)
            .then(res => res.json())
            .catch(error => console.log(error))
        return notes
    } catch (error) {
        console.log(error.message)
        return error
    }
}

async function updateNote() {
    try {
        const data = {
            title,
            content
        }

        const response = await fetch(`${API}/notes/create/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error.message)
        return error;
    }
}
async function deleteNote(id) {
    console.log(`${API}/notes/${id}`)
    try {
        const response = await fetch(`${API}/notes/delete/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        return result;

    }
    catch (error) {
        console.log(error.message)
        return error
    }
}
async function getOneNote(id) {
    try {
        const notes = await fetch(`${API}/notes/${id}`)
            .then(res => res.json())
            .catch(error => console.log(error))
        return notes
    } catch (error) {
        console.log(error.message)
        return error
    }
}

export { loginUser, registerUser, createNote, getAllNotes, updateNote, deleteNote, getOneNote }