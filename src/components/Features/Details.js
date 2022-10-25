import { useContext } from "react";
import { DataContext } from "../../App";
import { FeaturesContext } from "./Features";
import '../../index.css'

const Details = () => {
  const { filtered } = useContext(FeaturesContext);
  const {width, addToCart, decreaseHandleClick, count, increaseHandleClick } =
    useContext(DataContext);
  return (
    <div>
      {filtered.map((product) => {
        let image = product.image.mobile
        if (width > '640') {
           image = product.image.tablet
        } else if (width > '840') {
          image = product.image.mobile
         }
        return (
          <div key={product.id}>
            <div className="sm:flex text-left">
              <div className="mx-[10px] rounded-md px-8 py-3 text-black ">
                <img src={`${"."}${image}`} alt={product.name} />
              </div>
              <div>
                <h2 className="font-bold text-[20px] sm:text-[22px] w-[180px] ml-9 py-4  tracking-widest uppercase">
                  {product.name}
                </h2>
                <p className="px-9 leading-6 sm:pr-24 font-medium text-[14px] sm:text-[20px] sm:leading-8 opacity-50">
                  {product.description}
                </p>
                <p className="text-[12px] sm:text-[16px] font-bold py-4 px-9">
                  $ {product.price}
                </p>
                <div className="flex pl-9">
                  <button className="w-[130px] sm::w-[150px] sm:h-[60px] h-[40px] font-medium flex justify-around py-2 sm:py-5 bg-[#F1F1F1]">
                    <span onClick={decreaseHandleClick} className="text-center">
                      -
                    </span>
                    {count}
                    <span onClick={increaseHandleClick}>+</span>
                  </button>
                  <button
                    className="uppercase w-[150px] sm::w-[150px] sm:h-[60px] sm:text-[16px] font-medium text-[14px] mx-2 text-white h-[40px] bg-[#D87D4A]"
                    onClick={() =>
                      count > 0 ? addToCart(product, count) : null
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[14px] ml-9 pt-14 pb-3 sm:text-[20px] tracking-widest uppercase">
                Features
              </h4>
              <p className="px-9 leading-6 font-medium text-[14px]  sm:text-[20px] sm:leading-8 opacity-50">
                {product.features}
              </p>
            </div>
            <div className="sm:flex sm:justify-between">
              <h4 className="font-bold text-[14px]  ml-9 pt-14 pb-3 sm:text-[20px]  sm:pt-5 tracking-widest uppercase">
                In the box
              </h4>
              <div className="sm:pt-5 sm:pr-12">
                {product.includes.map((content, index) => {
                  return (
                    <div key={index} className="flex list-none  pl-9 mb-1">
                      <p className="font-medium text-[14px] sm:text-[20px] text-[#a48877] ">
                        {content.quantity}x
                      </p>
                      <li className="pl-3 lading-6 font-medium text-[14px] sm:text-[20px] opacity-50">
                        {content.item}
                      </li>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-[10px] sm:grid sm:grid-cols-2 gap-[20px] rounded-md px-8 py-20 text-black  ">
              <div className="sm:mr-3 " >
                <div className="sm:mb-2">
                <img
                className="rounded-md mb-3 sm:mb-[30px] "
                src={`${"."}${product.gallery.first.mobile}`}
                alt={product.name}
              />
              </div>
              <div className="">
              <img
                className="rounded-md mb-3 "
                src={`${"."}${product.gallery.second.mobile}`}
                alt={product.name}
              />
              </div>
            </div>
              <div>
              <img
                className="rounded-md mb-3 "
                src={`${"."}${product.gallery.third.mobile}`}
                alt={product.name}
              />
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Details;
