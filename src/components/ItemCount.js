import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregar = () => {
        onAdd(contador)
    }

    return (
        <>
            <div className="row addToCart my-5">
                <div className="col-5 col-lg-3">
                    <div className="input-group ">
                        <button className="btn" type="button" onClick={decrementar}>-</button>
                        <span className="input-group-text">{contador}</span>
                        <button className="btn" type="button" onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-add" type="button" onClick={agregar}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;