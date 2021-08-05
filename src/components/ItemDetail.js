const ItemDetail = ({item}) => {
    const {id, title, description, price, pictureUrl} = item
    return (
        <>
            <img srcSet={pictureUrl} width="300"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Precio: ${price}</p>
        </>
    )
}
export default ItemDetail