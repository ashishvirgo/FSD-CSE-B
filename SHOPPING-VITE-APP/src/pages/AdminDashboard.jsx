import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import AdminNavbar from '../component/AdminNavbar'

const AdminDashboard = () => {
  return (
    <div>
<Header/>
<AdminNavbar/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default AdminDashboard
