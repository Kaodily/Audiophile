import {Link} from 'react-router-dom'
import { useContext } from "react";
import { FeaturesContext } from "./Features";

const Others = () => {
  const {filtered,width} = useContext(FeaturesContext);
  return (
    <div className='text-center'>
      <h4 className='uppercase font-bold text-[16px] sm:text-[20px] '>You may also like</h4>
      {filtered.map((product, index) => {
         let image = product.image.mobile
         if (width > '640') {
            image = product.image.tablet
         } else if (width > '840') {
           image = product.image.mobile
          }
        return (
          <div key ={index} className='py-7 sm:flex' >
            {product.others.map((other, index) => {  
              return (
                <div key={index} className="mx-[20px]  mb-9 rounded-md ">
                  <img
                    className="rounded-md mb-2 "
                    src={`${"."}${image}`}
                    alt={other.name}
                  />
                  <h5 className='uppercase pt-2 font-bold text-[14px] sm:text-[16px]'>{other.name}</h5>
                  <Link to={`/${product.category}/${other.slug}`}>
                    <button className="uppercase w-[150px] sm:w-[180px] sm:h-[60px] font-meduim text-[14px] sm:text-[16px] text-white mt-[10px] h-[40px] bg-[#D87D4A]">
                      See product
                    </button>
                  </Link>
                </div>
              );
            })}{" "}
          </div>
        );
      })}
    </div>
  );
};
export default Others;
