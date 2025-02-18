import { Link } from "react-router-dom"
import './navigation.css'


const NavBar = () => {

    return (
        <div className="nav-bar">
        <Link to="/" className="navigate">
            Home
        </Link>
        <Link to="shopping" className="navigate">
            Shopping
        </Link>
        <Link to="cart" className="navigate">
            Cart
        </Link>
        </div>
    )
}

export default NavBar;