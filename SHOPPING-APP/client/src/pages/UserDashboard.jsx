import React from 'react'
import Navbar12 from '../components/Navbar12'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Outlet/>
      <Navbar12/>
      
    </div>
  )
}

export default UserDashboard
