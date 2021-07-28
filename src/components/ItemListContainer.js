import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const {greeting} = props;
    return (
        <>
            <p>{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={(contador) => {console.log(`Se agregaron ${contador} unidades`)}}/>
        </>
    )
}

export default ItemListContainer;
