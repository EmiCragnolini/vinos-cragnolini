import ItemList from "./ItemList";
import {useEffect, useState, useContext} from "react";
import {useLocation} from "react-router-dom"
import {firestore} from "../firebase";
import {Context} from "./context/Context";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { toggleMenu } = useContext(Context);
    const category = useLocation();
    let categoryId;

    useEffect(() => {
        const itemCollection = firestore.collection("items");
        let query;
        const categoryId = category?.state?.categoryId || false;
        if (categoryId) {
            query = itemCollection.where("categoryId","==",categoryId).limit(8).get();
        } else {
            query = itemCollection.limit(8).get();
        }

        query.then((result) => {
            const collection = [];
            result.forEach((document) => {
                const id = document.id;
                const data = document.data()
                collection.push({id,...data});
            })
            setItems(collection);
        })
        toggleMenu();
    }, [category])
    return (
        <>
            { items.length > 0 && <ItemList items={items}/> }
            { items.length === 0 && <h3>No hay productos para esta categoría</h3> }
        </>
    )
}

export default ItemListContainer;
