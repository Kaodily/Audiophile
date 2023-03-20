import {Link} from 'react-router-dom'
import { useContext } from "react";
import { FeaturesContext } from "./Features";

const Others = () => {
  const { filtered, width } = useContext(FeaturesContext);
  return (
    <div className='text-center mx-auto lg:mx-[100px]'>
      <h4 className='uppercase font-bold text-[16px] sm:text-[20px] '>You may also like</h4>
      {filtered.map((product, index) => {
        return (
          <div key={index} className='py-7 md:flex mx-[10px] lg:justify-center' >
            {product.others.map((other, index) => { 
                let image = other.image.mobile
                if (width >= 768 && width <= 1024) {
                   image = other.image.tablet
                } else if (width > 1024) {
                  image = other.image.desktop
                 }
              return (
                <div key={index} className="mx-[20px]  mb-9 rounded-md ">
                  <img
                    className="rounded-md mb-2 "
                    src={`${"."}${image}`}
                    alt={other.name}
                  />
                  <h5 className='uppercase pt-2 font-bold text-[14px] sm:text-[16px]'>{other.name}</h5>
                  <Link to={`/${product.category}/${other.slug}`}>
                    <button onClick={window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="uppercase w-[150px] sm:w-[180px] sm:h-[60px] font-meduim text-[14px] sm:text-[16px] text-white mt-[10px] h-[40px] bg-[#D87D4A]">
                      See product
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Others;
