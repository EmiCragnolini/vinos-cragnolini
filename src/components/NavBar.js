import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import {firestore} from "../firebase";
import logo from "../img/logo.png";
import {Context} from "./context/Context";

const NavBar = () => {
    const {toggleMenu, showMenu} = useContext(Context);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categories = firestore.collection("categories").get();
        categories.then((result) => {
            const collection = [];
            result.forEach((document) => {
                const id = document.id;
                const data = document.data();
                const location = {
                    pathname: `/categoria/${data.slug}`,
                    state: {categoryId: id}
                }
                collection.push({id, ...data, location});
            })
            setCategories(collection);
        })
    }, [])

    useEffect(() => {
        if (showMenu) {
            document.getElementById("offcanvasNavbar").classList.add("show");
            document.getElementById("offcanvas-backdrop").classList.add("show");
            document.getElementById("offcanvasNavbar").style.visibility = "visible";
        } else {
            document.getElementById("offcanvasNavbar").classList.remove("show");
            document.getElementById("offcanvas-backdrop").classList.remove("show");
        }
    })

    const menu = () => {
        toggleMenu();
    }


    return <nav className="navbar">
        <div className="container-fluid">
            <button className="navbar-toggler" onClick={menu} type="button">
                <i className="bi bi-list"/>
            </button>
            <Link to="/" className="navbar-brand m-0"><img src={logo} alt="Damajuana"/></Link>
            <CartWidget/>
            <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="Damajuana" width="200"/></h5>
                    <button type="button" className="btn-close text-reset" onClick={menu}/>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {
                            categories && categories.map((category, index) => {
                                return (<li key={index} className="nav-item"><Link to={category.location}
                                                                                   className="nav-link">{category.name}</Link>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="offcanvas-backdrop fade" id="offcanvas-backdrop"/>
        </div>
    </nav>
}
export default NavBar