import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(email=="admin@gmail.com" && password=="manager")
            navigate('/admin')
        if(email=="user@gmail.com" && password=="abes")
            navigate('/user')
     alert(`Email: ${email}\nPassword: ${password}`);
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />


                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                
                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}

export default Login
