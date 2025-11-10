import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import UserDashboard from './pages/UserDashboard'
import Shoplist from './component/Shoplist'
import AdminDashboard from './pages/AdminDashboard'
const App = () => {
 return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserDashboard/>}>
      <Route index element={<Shoplist/>}></Route>
      <Route path="orders" element={<h1>View orders</h1>}></Route>
      <Route path="cart" element={<h1>View Cart</h1>}></Route>
      <Route path="logout" element={<h1>Logout Successfully</h1>}></Route>
      </Route>
      <Route path="/admin" element={<AdminDashboard/>}>
      <Route index element={<Shoplist/>}></Route>
      <Route path="users" element={<h1>View users</h1>}></Route>
      <Route path="cart" element={<h1>View Cart</h1>}></Route>
      <Route path="logout" element={<h1>Logout Successfully</h1>}></Route>
      </Route>
      <Route path="/login" element={<h1>Login Here</h1>}></Route>
      
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  </div>
 )
}

export default App
