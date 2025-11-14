import React from "react";
import "../App.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import profile from '../assets/images/Ashish_pic.jpg'
const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <Navbar />
       
       
      <div className="dashboard-main">
        <div className="profile-section">
          <h2>User Profile</h2>
          <img
            src={profile}
            alt="Profile pic"
            className="profile-pic"
          />
          <h3>Ashish Bajpai</h3>
          <p>Email: ashishvirgo12@gmail.com</p>
          {/* <p>Member since: 2023</p> */}
          <button className="edit-btn">Edit Profile</button>
        </div>

        
        <div className="content-section">
          <Outlet />
        </div>
       </div>
      

      <Footer />
    </div>
  );
};

export default UserDashboard;
