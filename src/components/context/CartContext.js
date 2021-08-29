import {createContext, useState} from "react";

export const CartContext = createContext();
const {Provider} = CartContext

const CustomProvider = ( { children }) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        const index = isInCart(item.id);
        if (index >= 0) {
            items[index].quantity += quantity;
            setItems(items)
        }else {
            setItems([...items,{item:item, quantity}])
        }
    }

    const isInCart = (id) => {
        return items.findIndex( item => item.item.id === id )
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.item.id !== id))
    }

    const clear = () => {
        setItems([])
    }

    const totalPrice = () => {
        return items.reduce((total, {item: {price}, quantity}) => {
            return total + (price * quantity)
        }, 0)
    }

    return ( <Provider value={{addItem, items, removeItem, totalPrice, clear}}>
        {children}
    </Provider> )
}
export default CustomProvider