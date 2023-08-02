import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Constant username and password
    const username = 'Admin';
    const userPassword = 'admin';

    if (email === username && password === userPassword) {
      // Successful login, redirect to dashboard page
       navigate('/dashboard');
    } else {
      // Invalid credentials, show an error message
      alert('Invalid credentials. Please try again.');
    }
  };
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <div className="flex justify-center items-center mb-4">
              <img src={Logo} alt="Logo" className="w-8 h-8 mr-3" />
              <h5 className="font-semibold text-lg">Login Required for Text Upload</h5>
            </div>
  
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                id="form2Example17"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <button
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  
};

export default Login;
