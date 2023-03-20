import { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import Products from "../Utiliies/Products";
import Details from "./Details";
import Goback from "../Utiliies/Goback";
import Others from "./Others";

export const FeaturesContext = createContext();

const Features = ({ handleClick }) => {
  const { category, product } = useParams();
  const {datas,width} = useContext(DataContext)
  const filtered = datas.filter((data) => data.slug === product);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  return (
    <FeaturesContext.Provider value={{ filtered, handleClick,width}}>
      
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









