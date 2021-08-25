import ItemList from "./ItemList";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {firestore} from "../firebase";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const itemCollection = firestore.collection("items");
        let query;
        if (categoryId) {
            query = itemCollection.where("categoryId","==",categoryId).limit(4).get();
        } else {
            query = itemCollection.limit(4).get();
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
    }, [categoryId])
    return (
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;
