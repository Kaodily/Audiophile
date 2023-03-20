import { createContext, Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Utiliies/Header";
import datas from './data.json'
import Product from "./components/ProductDetails/Product";
import Home from "./components/Homepage/Home";
import Features from "./components/Features/Features";
import Exportmodal from "./components/Utiliies/Cart";
import Checkout from "./components/Checkout/Checkout";
import Navbar from "./components/Utiliies/Navbar";


export const DataContext = createContext();
function App() {
  
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
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  return (
    <DataContext.Provider value={{datas,width}}>
        <BrowserRouter>
        <Fragment>
         <Exportmodal />
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Product />} />
            <Route
              path="/:category/:product"
              element={<Features />}
            />
            <Route
              path="/Checkout"
              element={<Checkout />}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
