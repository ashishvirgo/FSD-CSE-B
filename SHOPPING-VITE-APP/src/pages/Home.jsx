import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
import HomeNavbar from '../component/HomeNavbar'

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
