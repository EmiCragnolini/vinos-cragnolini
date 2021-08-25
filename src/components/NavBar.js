import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {firestore} from "../firebase";

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const categories = firestore.collection("categories").get();
        categories.then((result) => {
            const collection = [];
            result.forEach((document) => {
                const id = document.id;
                const data = document.data();
                collection.push({id, ...data});
            })
            setCategories(collection);
        })
    }, [])

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">Vinos</Link>
            <div className="navbar-nav">
                {
                    categories && categories.map((category, index) => {
                        return (<Link key={index} to={`/categoria/${category.id}`} className="nav-link">{category.name}</Link>)
                    })
                }
                <CartWidget/>
            </div>
        </div>
    </nav>
}
export default NavBar