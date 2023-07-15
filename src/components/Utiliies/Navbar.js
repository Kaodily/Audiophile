import React from "react";
import { useSelector } from "react-redux";

import Products from "./Products";

const Navbar = () => {
  const { isNav } = useSelector((state) => state.general);
  if (!isNav) return null;
  return (
    <>
      <div  className="w-full shadow-md z-10 px-5 lg:hidden max-h-[600px] overflow-scroll absolute top-[80px] bg-white h-max">
        <Products />
      </div>
    </>
  );
};

export default Navbar;
