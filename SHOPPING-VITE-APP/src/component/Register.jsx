import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [error,setError]=useState(null);
    const [name,setName]=useState(null);
    const [mobile,setMobile]=useState(null);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
    const navigate=useNavigate();
    function handleSubmit(){
        alert(`Registration Successfull`)
        navigate('/login');
    }
  return (
    <div className="login-container">
            <h1>Register Here</h1>
            {error && <h4 style={{color:'red'}}>Error:{error}</h4>}
            <form onSubmit={handleSubmit} className="login-form">
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Full Name"
                    required
                />
                <label>Mobile:</label>
                <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your Mobile Number"
                    required
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />


                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                
                <button type="submit">Register</button>
                
            </form>
        </div>
  )
}

export default Register
