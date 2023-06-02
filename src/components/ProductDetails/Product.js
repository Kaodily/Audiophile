import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Introduction from "./Introduction";
import Productdetails from "./Productdetails";
import Products from ".././Utiliies/Products";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import { Context } from "../../store/context/AppContext";

const Product = () => {
  const { datas } = useContext(Context);
  const { category } = useParams();
  const data = datas.filter((data) => data.category === category);

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
