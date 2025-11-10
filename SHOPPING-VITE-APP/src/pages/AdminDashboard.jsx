import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

const AdminDashboard = () => {
  return (
    <div>
<Header/>
<Navbar/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default AdminDashboard
