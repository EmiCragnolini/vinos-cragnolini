import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer";
import CustomProvider from "./components/context/Context";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header/>
                <div className="container mt-4">
                    <Switch>
                        <Route path="/" exact component={ItemListContainer}/>
                        <Route path="/categoria/:category" component={ItemListContainer}/>
                        <Route path="/item/:itemId" component={ItemDetailContainer}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/checkout" component={Checkout}/>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App