import React from "react";
import { Link } from "react-router-dom";

const Others = ({ filtered }) => {
  const reset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-center mx-auto lg:mx-[100px]">
      <h4 className="uppercase font-bold text-[16px] sm:text-[20px] ">
        You may also like
      </h4>
      {filtered.map((product, index) => {
        return (
          <div key={index} className="py-7 md:flex mx-[10px] lg:justify-center">
            {product.others.map((other, index) => {
              return (
                <div key={index} className="mx-[20px]  mb-9 rounded-md ">
                  <picture className="mx-[10px] md:mx-0 rounded-md px-8 py-3 ">
                    <source
                      srcSet={`${"."}${other.image.desktop}`}
                      media="(min-width: 1280px)"
                    />
                    <source
                      srcSet={`${"."}${other.image.tablet}`}
                      media="(min-width: 768px)"
                    />
                    <source srcSet={`${"."}${other.image.mobile}`} />
                    <img src={`${"."}${other.image.mobile}`} alt={other.name} />
                  </picture>

                  <h5 className="uppercase pt-2 font-bold text-[14px] sm:text-[16px]">
                    {other.name}
                  </h5>
                  <Link to={`/${product.category}/${other.slug}`}>
                    <button
                      onClick={reset}
                      className="uppercase w-[150px] sm:w-[180px] sm:h-[60px] font-meduim text-[14px] sm:text-[16px] text-white mt-[10px] h-[40px] bg-[#D87D4A]">
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
