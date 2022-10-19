import { createContext, Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Utiliies/Header";
import Product from "./components/ProductDetails/Product";
import Home from "./components/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./components/Features/Features";
import Exportmodal from "./components/Utiliies/Cart";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([])
  const [isCart, setIsCart] = useState(false);
  const cartHandleClick = () => {
    setIsCart(prev => !prev)
  };
  const backdropHandleClick = () => {
    setIsCart(prev => !prev)
  }
  const addToCart = (product,count) => {
    const item = product
    item.cartQuantity = count;
    setCart(prev => [...prev,item])
  }
  console.log(cart)

  useEffect(() => {
  
  }, []);
  return (
    <CartContext.Provider value={{isCart,cartHandleClick,backdropHandleClick,addToCart,cart}}>
        <BrowserRouter>
        <Fragment>
         <Exportmodal />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Product />} />
            <Route
              path="/:category/:product"
              element={<Features  cart={isCart} />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
