import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useEffect, useState} from "react";
import products from "../products.json";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            if (categoryId) {
                resolve(products.filter(product => product.category === categoryId ))
            }
            resolve(products);
        })

        data.then((results) => {
            setItems(results);
        })

        data.catch((err) => {
            console.log(err)
        })
    }, [categoryId])
    return (
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;
