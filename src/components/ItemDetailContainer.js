import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import {firestore} from "../firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {itemId} = useParams();
    useEffect(() => {
        const itemCollection = firestore.collection("items").doc(itemId).get();
        itemCollection.then((document) => {
            const id = document.id;
            const data = document.data()
            setItem({id,...data})
        });

    }, [itemId])

    return <ItemDetail item={item}/>
}

export default ItemDetailContainer