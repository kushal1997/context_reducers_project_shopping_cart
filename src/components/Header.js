import Logo from "../assets/images/logo.png"
import { Link,NavLink } from "react-router-dom"
import { useCart } from "../context/CardContext";

export const Header = () => {
  const {cartList} =useCart();

  return (
    <header className=" bg-sky-200 sticky top-0 flex justify-between h-[70px] items-center max-w-[1200px] text-lg m-auto px-2.5 py-0 border-b-[#eeededdd] border-b border-solid ">
      <Link to="/" className="flex items-center" >
        <img className="max-w-[40px] mr-[5px]" src={Logo} alt="Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="pages">
        <NavLink className="link p-2.5" to="/" >Home</NavLink>
        <NavLink className="link p-2.5"  to="/cart">Cart</NavLink>
      </nav>
      <Link className="font-medium min-w-[70px]" to="/cart" >
      <span>Cart - {cartList.length}</span>
      </Link>
    </header>
    
  )
}
