import { useParams } from "react-router-dom";
import Introduction from "./Introduction";
import Productdetails from "./Productdetails";
import { createContext, useContext } from "react";
// import datas from "../../data.json";
import Products from ".././Utiliies/Products";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import { DataContext } from "../../App";

export const ProductContext = createContext();
const Product = () => {
  const {datas,width} = useContext(DataContext)
  const { category } = useParams();
  const data = datas.filter((data) => data.category === category);
  return (
    <ProductContext.Provider value={{ data, category,width}}>
      <Introduction />
      <Productdetails />
      <Products />
      <Audiogear />
      <Footer />
    </ProductContext.Provider>
  );
};
export default Product;
