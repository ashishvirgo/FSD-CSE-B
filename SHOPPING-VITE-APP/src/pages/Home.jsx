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
      <div style={{overflowY:'auto',height:'81vh',padding: '10px', margin: '10px'}}>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
