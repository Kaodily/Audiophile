import React from "react";
import { useSelector } from "react-redux";

import Products from "./Products";

const Navbar = () => {
  const { isNav } = useSelector((state) => state.general);

  return (
    <>
      {isNav && (
        <div className="w-full shadow-md z-10 px-5 lg:hidden absolute bg-white h-max">
          <Products />
        </div>
      )}
    </>
  );
};

export default Navbar;
