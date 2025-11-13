import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const HomeNavbar = () => {
  return (
    <div className="navbar">
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">AboutUS</Link>
        <Link to="/contact">ContactUS</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default HomeNavbar
