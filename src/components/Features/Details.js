import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Context } from "../../store/context/AppContext";

const Details = ({ filtered }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { width } = useContext(Context);
  const addToCart = (product, count) => {
    let items = { product, count };
    dispatch(cartActions.addItem(items));
  };
  const item = filtered[0].slug;
  useEffect(() => {
    setQuantity(0);
  }, [item]);
  const increaseHandleClick = () => {
    setQuantity((count) => (count += 1));
  };
  const decreaseHandleClick = () => {
    setQuantity((count) => (count -= 1));
  };
  return (
    <div>
      {filtered.map((product) => {
        return (
          <div key={product.id} className="lg:mx-[130px] ">
            <div className="md:grid grid-cols-2 text-left ">
              <picture className="mx-[10px] md:mx-0 rounded-md px-8 py-3 ">
                <source
                  srcSet={`${"."}${product.image.desktop}`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${"."}${product.image.tablet}`}
                  media="(min-width: 768px)"
                />
                <source srcSet={`${"."}${product.image.mobile}`} />
                <img src={`${"."}${product.image.mobile}`} alt={product.name} />
              </picture>
              <div className="lg:pr-[200px] md:pt-36 lg:pt-24 md:leading-6">
                <h2 className="font-bold text-[20px] sm:text-[22px] lg:w-[180px] ml-9 py-4  tracking-widest uppercase">
                  {product.name}
                </h2>
                <p className="px-9 leading-6 lg:w-[500px] font-medium text-[14px] sm:text-[16px] sm:leading-8 opacity-50">
                  {product.description}
                </p>
                <p className="text-[12px] sm:text-[16px] font-bold py-4 px-9">
                  $ {product?.price.toLocaleString()}
                </p>
                <div className="flex pl-9">
                  <div>
                    <button className="w-[130px] sm::w-[150px] sm:h-[60px] h-[40px] font-medium flex justify-around py-2 sm:py-5 bg-[#F1F1F1]">
                      <span
                        onClick={decreaseHandleClick}
                        className="text-center">
                        -
                      </span>
                      {quantity}
                      <span onClick={increaseHandleClick}>+</span>
                    </button>
                  </div>
                  <div>
                    <button
                      className="uppercase w-[150px] sm::w-[150px] sm:h-[60px] sm:text-[16px] font-medium text-[14px] mx-2 text-white h-[40px] bg-[#D87D4A]"
                      onClick={() =>
                        quantity > 0 ? addToCart(product, quantity) : null
                      }>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:grid grid-cols-2">
                <div>
                  <h4 className="font-bold text-[14px] ml-9 pt-14 pb-3 sm:text-[20px] tracking-widest uppercase">
                    Features
                  </h4>
                  <p className="px-9 leading-6 font-medium text-[14px] sm:text-[16px] sm:leading-8 opacity-50">
                    {product.features}
                  </p>
                </div>
                <div className="md:flex md:justify-between lg:block lg:ml-24  ">
                  <h4 className="font-bold text-[14px]  ml-9 pt-14 lg:pt-16 pb-3 sm:text-[20px]  sm:pt-5 tracking-widest uppercase">
                    In the box
                  </h4>
                  <div className="sm:pt-5 sm:pr-12">
                    {product.includes.map((content, index) => {
                      return (
                        <div key={index} className="flex list-none  pl-9 mb-2">
                          <p className="font-medium text-[14px] sm:text-[16px] text-[#a48877] ">
                            {content.quantity}x
                          </p>
                          <li className="pl-3 lading-6 font-medium text-[14px] sm:text-[16px] opacity-50">
                            {content.item}
                          </li>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-[10px] sm:flex rounded-md px-8 py-20 text-black  ">
              <div className="sm:mr-6">
                <div className="sm:mb-6">
                  <img
                    className="rounded-md mb-3 sm:mb-[10px] "
                    src={`${"."}${
                      width >= 768 && width <= 1024
                        ? product.gallery.first.mobile
                        : product.gallery.first.desktop
                    }`}
                    alt={product.name}
                  />
                </div>
                <div className="">
                  <img
                    className="rounded-md mb-3 "
                    src={`${"."}${
                      width >= 768 && width <= 1024
                        ? product.gallery.second.mobile
                        : product.gallery.second.desktop
                    }`}
                    alt={product.name}
                  />
                </div>
              </div>
              <div>
                <img
                  className="rounded-md mb-3 "
                  src={`${"."}${
                    width >= 768 && width <= 1024
                      ? product.gallery.third.mobile
                      : product.gallery.third.desktop
                  }`}
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
