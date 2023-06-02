import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import Products from "../Utiliies/Products";
import Goback from "../Utiliies/Goback";

import Details from "./Details";
import Others from "./Others";
import { Context } from "../../store/context/AppContext";

const Features = ({ handleClick }) => {
  const { category, product } = useParams();
  const { datas } = useContext(Context);
  const filtered = datas.filter((data) => data.slug === product);

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
