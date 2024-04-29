import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Register from './components/User/Register';
import Login from './components/User/Login';
import AuthContext from './contexts/authContext';
import { loginUser, registerUser } from './utils/fetchData';
import './App.css';
import Welcome from './components/Welcome';
function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const clearError = () => {
    setLoginError(''),
      setRegisterError('')
  }

  const loginSubmitHandler = async (values) => {
    const result = await loginUser(values);
    if (result.message) {
      setAuth({});
      setLoginError(result.message);
    }
    else {
      setAuth(result);
      setLoginError('');
      navigate('/')
    }
  };

  const registerSubmitHandler = async (values) => {
    const result = await registerUser(values);
    if (result.message) {
      setAuth({});
      setRegisterError(result.message);
    }
    else {
      setAuth(result);
      setRegisterError('');
      navigate('/login')
    }
  }
  const logoutSubmitHandler = () => {
    setAuth({})
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    _id: auth._id,
    isAuthenticated: !!auth.username,
    loginError,
    registerError,
    logoutSubmitHandler,
    clearError
  }
  return (
    <>
      <AuthContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Welcome />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
