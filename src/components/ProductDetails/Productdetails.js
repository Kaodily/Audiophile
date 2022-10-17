import { useContext } from "react";
import { DataContext } from "./Product";
import {Link} from 'react-router-dom'

const Productdetails = () => {
  const { data } = useContext(DataContext);
  return (
    <article className="pt-5 text-center">
          {data.map((data) => {
              return (
                  <div key={data.id}>
                  {data.type.map((product) => {
                  console.log(typeof product.name)
              return (
                <div key={product.id} className="py-9">
                  <div className="mx-[20px] rounded-md px-8 py-3 text-black ">
                    <img src={product.image} alt="product.name" />
                  </div>
                  <h3 className="uppercase my-7 text-[14px] tracking-widest font-bold text-[#D87D4A] text-center px-20">
                    New product
                  </h3>
                  <p className="px-9 leading-6 text-center font-medium text-[14px] opacity-50">
                    {product.details}
                  </p>
                  <Link to={`/${data.product}/${product.name}`}>
                    <button className="uppercase w-[150px] font-medium text-[14px] text-white mt-[30px] h-[40px] bg-[#D87D4A]">
                      See product
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </article>
  );
};
export default Productdetails;
