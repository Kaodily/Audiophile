import { createContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Utiliies/Header";

import Product from "./components/ProductDetails/Product";
import Home from "./components/Homepage/Home";
import Features from "./components/Features/Features";
import Exportmodal from "./components/Utiliies/Cart";
import Checkout from "./components/Checkout/Checkout";
import Navbar from "./components/Utiliies/Navbar";

export const DataContext = createContext();
function App() {
  return (
    <Fragment>
      <Exportmodal />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Product />} />
        <Route path="/:category/:product" element={<Features />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Fragment>
  );
}

export default App;
