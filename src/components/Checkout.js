import {CartContext} from "./context/CartContext";
import {useContext, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import {firestore} from "../firebase";


const Checkout = () => {
    const [orderId, setOrderId] = useState();
    const [error, setError] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const {items, totalPrice, clear} = useContext(CartContext)

    const createOrder = () => {
        setLoading(true)
        const buyer = {
            name, phone, email
        }
        const orders = firestore.collection("orders");
        const newOrder = {
            buyer,
            items,
            date: Date.now() / 1000 | 0,
            total: totalPrice()
        }
        orders.add(newOrder).then(({id}) => {
            setOrderId(id);
            clear();
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    const updateStockItems = async (e) => {
        e.preventDefault()

        setLoading(true);
        let docRef;
        const batch = firestore.batch();

        new Promise((res, rej) => {
            let outOfStock = [];
            items.forEach((i) => {
                docRef = firestore.collection("items").doc(i.item.id).get();
                docRef.then((document) => {
                    const data = document.data();
                    if (data.stock < i.quantity) {
                        outOfStock.push({...data, id: document.id});
                    }
                }).catch(() => {
                    rej("error")
                })
            })
            console.log(outOfStock);
            if (outOfStock.length === 0 ){
                res(true)
            }
            rej(outOfStock);
        }).then((itsOk) => {
            if (itsOk) {
                items.map((i) => {
                    docRef = firestore.collection("items").doc(i.item.id);
                    const query = docRef.get();
                    let stockOld;
                    query.then((document) => {
                        const data = document.data();
                        stockOld = data.stock
                        const updateItem = docRef.update({
                            stock: stockOld - i.quantity
                        })
                    })
                })
                createOrder();
            }
        }).catch(outOfStock => {
            console.log(outOfStock)
            const err = <>
                <p>Los siguientes productos no hay en stock</p>
                <ul>
                    {
                        outOfStock.map(item => {
                            return <li>{item.title}</li>
                        })
                    }
                </ul>
            </>;
            setError(err)
        })

    }

    const backHome = () => {
        clear();
        history.push("/");
    }

    return <>
        <div className="row">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="p-4">Checkout</h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <h3>Información de contacto</h3>
                <form onSubmit={updateStockItems}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" required id="name" placeholder="Horacio"
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" required id="phone" placeholder="+54351123456"
                               onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" required id="email" placeholder="mail@mail.com"
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    {!orderId &&
                    <div className="mb-3">
                        <button type="submit" className="btn btn-success">Comprar</button>
                        <Link to="/cart" className="btn text-primary">Volver al carrito</Link>
                        {
                            loading && <span className="align-items-center">
                                <div className="spinner-border spinner-border-sm mx-2" role="status"
                                     aria-hidden="true"></div>
                                <strong>Procesando...</strong>
                            </span>
                        }
                    </div>
                    }
                </form>
                <div className="mb-3">
                    {error &&
                    <div className="alert alert-danger" role="alert">
                        error: {error}
                    </div>
                    }
                </div>
            </div>
            <div className="col-12 col-md-6">
                {orderId &&
                <div className="alert alert-success" role="alert">
                    <p>Muchas gracias por su compra, el Id de su pedido es: {orderId}</p>
                    <p><button onClick={backHome} className="btn text-primary">Seguir navegando</button></p>
                </div>
                }
                {
                    items.length > 0 && (
                        <table className="table table-dark">
                            <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">
                                            <span className="position-relative">
                                                <img srcSet={item.item.pictureUrl}
                                                     className="img-fluid position-relative"
                                                     width="50" alt={item.item.title}/>
                                                <span
                                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {item.quantity}
                                                    <span className="visually-hidden">unread messages</span>
                                              </span>
                                            </span>
                                        </th>
                                        <td>{item.item.title}</td>
                                        <td>${item.item.price * item.quantity}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3} className="text-end">
                                    Total ${totalPrice()}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    </>
}

export default Checkout