import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";

import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import Products from "../Utiliies/Products";
import Goback from "../Utiliies/Goback";

import Details from "./Details";
import Others from "./Others";

const Features = ({ handleClick }) => {
  const { category, product } = useParams();
  const { datas } = useContext(DataContext);
  const filtered = datas.filter((data) => data.slug === product);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Goback category={category} product={product} />
      <Details filtered={filtered} />
      <Others filtered={filtered} />
      <Products />
      <Audiogear />
      <Footer />
    </div>
  );
};
export default Features;
