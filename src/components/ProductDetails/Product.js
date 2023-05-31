import React, { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import Introduction from "./Introduction";
import Productdetails from "./Productdetails";
import Products from ".././Utiliies/Products";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";

// export const ProductContext = createContext();
const Product = () => {
  const { datas } = useContext(DataContext);
  const { category } = useParams();
  const data = datas.filter((data) => data.category === category);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Introduction category={category} />
      <Productdetails data={data} />
      <Products />
      <Audiogear />
      <Footer />
    </>
  );
};
export default Product;
