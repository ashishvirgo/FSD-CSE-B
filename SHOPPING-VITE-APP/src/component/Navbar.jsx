import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Welcome User</h2>
      <div className="nav-links">
        <Link to="/user">Home</Link>
        <Link to="/user/cart">Cart</Link>
        <Link to="/user/orders">Orders</Link>
        <Link to="/user/logout">Logout</Link>
      </div>
    </div>
  )
}

export default Navbar
