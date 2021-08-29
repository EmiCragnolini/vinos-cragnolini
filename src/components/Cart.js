import {useContext} from "react";
import {CartContext} from "./context/CartContext";
import {Link} from "react-router-dom";

const Cart = () => {
    const {items, removeItem, totalPrice} = useContext(CartContext)

    return (
        <div className="container">
            {
                items.length > 0 && <>
                <table className="table">
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
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row"><img srcSet={item.item.pictureUrl} className="img-fluid rounded-start"
                                                     width="80" alt={item.item.title}/></th>
                                <td>{item.item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{item.item.price}</td>
                                <td>${item.item.price * item.quantity}</td>
                                <td>
                                    <button onClick={() => removeItem(item.item.id)}
                                            className="btn btn-danger float-end"><i
                                        className="bi bi-trash"/></button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div className="card w-50">
                    <div className="card-body">
                        <p className="card-text">SubTotal ${totalPrice()} </p>
                        <Link to="/checkout" className="btn btn-primary">Comprar</Link>
                    </div>
                </div>
            </>
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