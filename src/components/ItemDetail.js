import ItemCount from "./ItemCount";
import {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState();
    const {id, title, description, price, pictureUrl,stock} = item;

    const onAdd = (contador) => {
        setCantidad(contador);
    }

    return (
        <>
            <img srcSet={pictureUrl} width="300"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Precio: ${price}</p>
            { cantidad ? (
                <Link to="/cart" className="btn btn-outline-secondary">Terminar mi compra</Link>
            ) : (
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            )}
        </>
    )
}
export default ItemDetail