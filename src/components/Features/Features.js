import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
// import datas from "../../data.json";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import Products from "../Utiliies/Products";
import Details from "./Details";
import Goback from "./Goback";
import Others from "./Others";

export const FeaturesContext = createContext();

const Features = ({ handleClick }) => {
  const { category, product } = useParams();
  const {datas} = useContext(DataContext)
  const filtered = datas.filter((data) => data.slug === product);
  return (
    <FeaturesContext.Provider value={{ filtered, handleClick}}>
      <div  >
      <Goback category={category} product={product} />
      <Details />
      <Others />
      <Products />
      <Audiogear />
      <Footer />
      </div>
    </FeaturesContext.Provider>
  );
};
export default Features;









