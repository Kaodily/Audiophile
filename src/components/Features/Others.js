import {Link} from 'react-router-dom'
import { useContext } from "react";

import { DataContext } from "./Features";

const Others = () => {
  const { filtered } = useContext(DataContext);
  return (
    <div className='text-center'>
      <h4 className='uppercase font-bold text-[16px]'>You may also like</h4>
      {filtered.map((product, index) => {
        return (
          <div key ={index} className='py-7' >
            {product.others.map((other, index) => {  
              return (
                <div key={index} className="mx-[20px]  mb-9 rounded-md ">
                  <img
                    className="rounded-md mb-2 "
                    src={`${"."}${other.image.mobile}`}
                    alt={other.name}
                  />
                  <h5 className='uppercase pt-2 font-bold text-[15px]'>{other.name}</h5>
                  <Link to={`/${product.category}/${other.slug}`}>
                    <button className="uppercase w-[150px] font-meduim text-[10px] text-white mt-[10px] h-[40px] bg-[#D87D4A]">
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
