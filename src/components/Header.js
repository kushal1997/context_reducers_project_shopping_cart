import Logo from "../assets/images/logo.png"
import { Link,NavLink } from "react-router-dom"
import "./header.css"
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo" >
        <img  src={Logo} alt="Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="pages">
        <NavLink className="link" to="/" >Home</NavLink>
        <NavLink className="link" to="/cart">Cart</NavLink>
      </nav>
      <Link className="counter" to="/cart" >
      <span>Cart - 2</span>
      </Link>
    </header>
    
  )
}
