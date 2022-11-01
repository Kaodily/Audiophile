import { createContext, Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Utiliies/Header";
import datas from './data.json'
import Product from "./components/ProductDetails/Product";
import Home from "./components/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./components/Features/Features";
import Exportmodal from "./components/Utiliies/Cart";

export const DataContext = createContext();
function App() {
  const [cartSize, setCartSize] = useState([])
  const [cart, setCart] = useState([])
  const [isCart, setIsCart] = useState(false);
  const [count, setCount] = useState(0);
  const [width,setWidth] = useState('')
 
  useEffect(() => {
    window.addEventListener('resize',windowListener)
    return (() => {
      window.removeEventListener('resize',windowListener)
    })
  },[width]);
  function windowListener() {
    setWidth(window.innerWidth)
  }
  const increaseHandleClick = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseHandleClick = () => {
    count <= 0 ? setCount(0) : setCount((prev) => prev - 1);
  };
  const cartHandleClick = () => {
    setIsCart(prev => !prev)
    const uniqueCart = cartSize.filter((product, index) => cartSize.indexOf(product) === index)
    setCart(uniqueCart)
  };
  const backdropHandleClick = () => {
    setIsCart(prev => !prev)
  }
  const addToCart = (product,count) => {
    const item = product
    item.cartQuantity = count;
    setCartSize(prev => [...prev, item])
    console.log(cartSize)

    setTimeout(() => {
      console.log(cartSize)
    },1000)
   
  }
  return (
    <DataContext.Provider value={{isCart,cartHandleClick,backdropHandleClick,addToCart,cart,increaseHandleClick,decreaseHandleClick,count,cartSize,datas,width}}>
        <BrowserRouter>
        <Fragment>
         <Exportmodal />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Product />} />
            <Route
              path="/:category/:product"
              element={<Features />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
