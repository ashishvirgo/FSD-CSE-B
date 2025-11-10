import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/orders">Orders</Link>
    </nav>
  );
}
export default Navbar;