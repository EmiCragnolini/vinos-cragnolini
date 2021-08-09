import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={ItemListContainer} />
                    <Route path="/categoria/:categoryId" component={ItemListContainer} />
                    <Route path="/item/:itemId" component={ItemDetailContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App