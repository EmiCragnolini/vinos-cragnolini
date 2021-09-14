import ItemCount from "./ItemCount";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Context} from "./context/Context";

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState();
    let cartContext = useContext(Context);
    const {id, title, description, price, pictureUrl, stock} = item;

    const onAdd = (contador) => {
        setCantidad(contador);
        cartContext.addItem(item, contador)
    }

    return item &&
        (
            <div className="row product">
                <div className="col-12 col-md-6 text-center">
                    <img srcSet={pictureUrl} width="300"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1>{title}</h1>
                    <p className="price">${price}</p>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    {cantidad &&
                    <div className="row alert alert-success">
                        <div className="col-12 my-3">
                            El producto se agregó al carrito exitosamente.
                        </div>
                        <div className="col-12">
                            <Link to="/cart" className="btn btn-warning">Ir al carrito</Link>
                            <Link to="/" className="btn btn-success mx-2">Seguir comprando</Link>
                        </div>
                    </div>
                        }

                    <h3 className="my-5">{description}</h3>
                </div>

            </div>
        )
}
export default ItemDetail