import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useEffect, useState} from "react";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {greeting} = props;
    const products = [
        {
            id: '0',
            title: 'Cordero con piel de lobo Malbec',
            price: '200',
            pictureUrl: 'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60952_default_big.jpeg'
        },
        {
            id: '1',
            title: 'Rutini Cabernet Malbec',
            price: '1000',
            pictureUrl: 'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61998_default_big.jpeg'
        }
    ];
    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        })

        data.then((results) => {
            setItems(results);
        })

        data.catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <p>{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={(contador) => {
                console.log(`Se agregaron ${contador} unidades`)
            }}/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;
