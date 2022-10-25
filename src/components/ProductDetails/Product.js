import { useParams } from "react-router-dom";
import Introduction from "./Introduction";
import Productdetails from "./Productdetails";
import { createContext, useContext } from "react";
import datas from "../../data.json";
import Products from ".././Utiliies/Products";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";

export const ProductContext = createContext();
console.log(datas);
const Product = () => {
  const { category } = useParams();
  const data = datas.filter((data) => data.category === category);
  console.log(data);
  return (
    <ProductContext.Provider value={{ data, category }}>
      <Introduction />
      <Productdetails />
      <Products />
      <Audiogear />
      <Footer />
    </ProductContext.Provider>
  );
};
export default Product;
