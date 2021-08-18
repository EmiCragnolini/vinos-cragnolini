import {createContext, useState} from "react";

export const CartContext = createContext();
const {Provider} = CartContext

const CustomProvider = ( { children }) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        let newItem = {item:item, quantity}
        const index = isInCart(item.id);
        if (index >= 0) {
            quantity = items[index].quantity + quantity;
            newItem = {item: items[index].item, quantity }
            removeItem(item.id)
        }
        setItems([...items, newItem])
    }

    const isInCart = (id) => {
        return items.findIndex( item => item.item.id === id )
    }

    const removeItem = (id) => {
        const index = isInCart(id);
        const newItems = items.splice(index,1)
        setItems(newItems)
    }

    const clear = () => {
        setItems([])
    }

    return ( <Provider value={{addItem}}>
        {children}
    </Provider> )
}
export default CustomProvider