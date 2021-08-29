import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer";
import CustomProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ItemListContainer}/>
                        <Route path="/categoria/:categoryId" component={ItemListContainer}/>
                        <Route path="/item/:itemId" component={ItemDetailContainer}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/checkout" component={Checkout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App