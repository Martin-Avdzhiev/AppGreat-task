const API = 'http://localhost:3000/api/';
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
const registerUser = async (username, password,repeatPassword) => {
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

export { loginUser, registerUser}