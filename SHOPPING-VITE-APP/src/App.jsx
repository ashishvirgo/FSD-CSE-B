import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import UserContext from './context/UserContext'
import UserDashboard from './pages/UserDashboard'
import Shoplist from './component/Shoplist'
import AdminDashboard from './pages/AdminDashboard'
import ViewCart from './component/ViewCart'
import Home from './pages/Home'
import Login from './component/Login'
import Logout from './component/Logout'
import AdminTask from './component/AdminTask'
const App = () => {
  const [cartItem,setCartItem]=useState([]);
  function addtocart(item){
    alert(`successfully added ${item.title}`)
    setCartItem([...cartItem,item])
  }
 return(
  <div>
    <UserContext.Provider value={{cartItem,addtocart}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route index element={<Shoplist/>}></Route>
      <Route path="/register" element={<h1>Register Here</h1>}/>
      <Route path="/about" element={<h1>About App</h1>}/>
      <Route path="/contact" element={<h1>Contact Us</h1>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
      <Route path="/user" element={<UserDashboard/>}>
      <Route index element={<Shoplist/>}></Route>
      <Route path="orders" element={<h1>View orders</h1>}></Route>
      <Route path="cart" element={<ViewCart/>}></Route>
      <Route path="logout" element={<Logout/>}></Route>
      </Route>
      <Route path="/admin" element={<AdminDashboard/>}>
      <Route index element={<AdminTask/>}></Route>
      <Route path="adduser" element={<h1>Add user</h1>}></Route>
      <Route path="viewuser" element={<h1>View users</h1>}></Route>
      <Route path="additem" element={<h1>Add Item</h1>}></Route>
      <Route path="viewitem" element={<h1>View Item</h1>}></Route>
      <Route path="logout" element={<Logout/>}></Route>
      </Route>
      
      
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  </div>
 )
}

export default App
