import ItemCount from "./ItemCount";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "./context/CartContext";

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState();
    let cartContext = useContext(CartContext);
    const {id, title, description, price, pictureUrl,stock} = item;

    const onAdd = (contador) => {
        setCantidad(contador);
        cartContext.addItem(item, contador)
    }

    return (
        <>
            <img srcSet={pictureUrl} width="300"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Precio: ${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            { cantidad && <Link to="/cart" className="btn btn-outline-secondary">Terminar mi compra</Link>
            }
        </>
    )
}
export default ItemDetail