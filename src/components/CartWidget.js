import {useContext, useState} from "react";
import {Context} from "./context/Context";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const cartContext = useContext(Context)
    const totalItems = cartContext.items.reduce((total, {quantity}) => {
        return total + quantity
    }, 0)

    return (
        <button className="navbar-toggler position-relative">
            <Link to="/cart">
                <i className="bi bi-cart-fill"/>
                <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                    {totalItems > 0 && totalItems}
                  </span>
            </Link>
        </button>
    )
}
export default CartWidget;