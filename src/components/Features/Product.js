import React from "react";

const Product = ({ product, width }) => {
  return (
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
  );
};

export default Product;
