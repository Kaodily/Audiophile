import { createContext } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data.json";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import Products from "../Utiliies/Products";
import Details from "./Details";
import Goback from "./Goback";
import Others from "./Others";

export const DataContext = createContext();
const Features = ({ handleClick, cart }) => {
    const {category, product } = useParams();
  const filtered = datas.filter((data) => data.slug === product);
  return (
    <DataContext.Provider value={{ filtered, handleClick }}>
      <Goback category={category} product={product} />
      <Details />
      <Others />
      <Products />
      <Audiogear />
      <Footer />
    </DataContext.Provider>
  );
};
export default Features;
