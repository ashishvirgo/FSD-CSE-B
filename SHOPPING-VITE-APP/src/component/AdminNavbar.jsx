import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
  return (
    <div className='navbar'>
      <h2>Welcome Admin</h2>
      <div className="nav-links">
        <Link to="/admin">Home</Link>
        <Link to="/admin/additem">Add Item</Link>
        <Link to="/admin/viewItem">View Items</Link>
        <Link to="/admin/adduser">Add User</Link>
        <Link to="/admin/viewuser">View User</Link>
        <Link to="/user/changepassword">Change Password</Link>
        <Link to="/admin/logout">Logout</Link>
      </div>
    </div>
  )
}

export default AdminNavbar
