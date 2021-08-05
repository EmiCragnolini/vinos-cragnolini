import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const product = {
        id: '0',
        title: 'Cordero con piel de lobo Malbec',
        description: 'Lorem Ipsum',
        price: '200',
        pictureUrl: 'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60952_default_big.jpeg'
    }
    const getItems = () => {
        return new Promise((resolve,reject) => {
            resolve(product)
        })
    }
    useEffect(() => {
        setTimeout(() => {
            return getItems().then((data) => {
                setItem(data)
            })
        }, 2000)
    },[])

    return <ItemDetail item={item} />
}

export default ItemDetailContainer