import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">Vinos</Link>
            <div className="navbar-nav">
                <Link to="/categoria/1" className="nav-link">Malbec</Link>
                <Link to="/categoria/2" className="nav-link">Blend</Link>
                <Link to="/categoria/3" className="nav-link">Cabernet</Link>
                <CartWidget/>
            </div>
        </div>
    </nav>

export default NavBar