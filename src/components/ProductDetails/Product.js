import { useParams } from "react-router-dom";
import Introduction from "./Introduction";
import Productdetails from "./Productdetails";
import { createContext, useContext , useEffect} from "react";
import Products from ".././Utiliies/Products";
import Audiogear from "../Utiliies/Audiogear";
import Footer from "../Utiliies/Footer";
import { DataContext } from "../../App";

export const ProductContext = createContext();
const Product = () => {
  const {datas,width} = useContext(DataContext)
  const { category } = useParams();
  const data = datas.filter((data) => data.category === category);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
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
