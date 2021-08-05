import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    const greeting = "esto es un saludo";
    return (
        <>
            <NavBar/>
            <div className="container">
                <Header/>
                <ItemListContainer greeting={greeting}/>
                { /* <ItemDetailContainer/> */ }
            </div>
        </>
    )
}

export default App