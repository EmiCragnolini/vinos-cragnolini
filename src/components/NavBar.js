import CartWidget from "./CartWidget";

const NavBar = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Vinos</a>
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link" href="#">Link 1</a>
                <a className="nav-link" href="#">Link 2</a>
                <CartWidget/>
            </div>
        </div>
    </nav>

export default NavBar