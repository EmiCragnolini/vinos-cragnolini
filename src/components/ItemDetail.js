import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {id, title, description, price, pictureUrl} = item;
    return (
        <>
            <img srcSet={pictureUrl} width="300"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Precio: ${price}</p>
            <ItemCount stock={5} initial={1} onAdd={(contador) => {
                console.log(`Se agregaron ${contador} unidades`)
            }}/>
        </>
    )
}
export default ItemDetail