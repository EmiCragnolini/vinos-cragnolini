import {useContext, useState} from "react";
import {CartContext} from "./context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const cartContext = useContext(CartContext)
    const totalItems = cartContext.items.reduce((total, {quantity}) => {
        return total + quantity
    }, 0)

    return (
        <Link to="/cart">
            <i className="bi bi-cart"/>
            { totalItems > 0 && <span className="badge bg-secondary">{totalItems}</span> }
        </Link>
    )
}
export default CartWidget;