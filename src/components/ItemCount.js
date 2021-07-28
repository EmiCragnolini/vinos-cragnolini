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
        <div className="input-group ">
            <button className="btn btn-outline-secondary" type="button" onClick={decrementar}>-</button>
            <span className="input-group-text">{contador}</span>
            <button className="btn btn-outline-secondary" type="button" onClick={incrementar}>+</button>
            <button className="btn btn-outline-secondary" type="button" onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount;