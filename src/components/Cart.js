import {useContext} from "react";
import {CartContext} from "./context/CartContext";

const Cart = () => {
    const {items, removeItem} = useContext(CartContext)

    return (
        <div className="container">
            {items.length > 0 && <table className="table">
                <thead>
                <tr>
                    <th scope="col">Foto</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cant</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                { items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row"><img srcSet={item.item.pictureUrl} className="img-fluid rounded-start"
                                                 width="80" alt={item.item.title}/></th>
                            <td>{item.item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.item.price}</td>
                            <td>${item.item.price * item.quantity}</td>
                            <td>
                                <button onClick={() => removeItem(item.item.id)} className="btn btn-danger float-end"><i
                                    className="bi bi-trash"/></button>
                            </td>
                        </tr>
                    )
                })}
                    <tr>
                        <td colSpan="4"/>
                        <td>TOTAL</td>
                        <td colSpan="2">
                            ${items.reduce((total,{item: {price}, quantity}) => {
                                return total + (price * quantity)
                        },0)}
                        </td>
                    </tr>
                </tbody>
            </table>
            }
            {
                items.length === 0 && <div className="alert alert-warning" role="alert">
                    El carrito se encuentra vacío
                </div>
            }
        </div>
    )
}
export default Cart