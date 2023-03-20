import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
const {isNav} = useSelector(state => state.general)

  const products = ["home", "headphones", "speakers", "earphones"];
  return (
 <>
 {isNav &&
 <div className="w-full md:w-[50%]  pt-8 px-5 lg:hidden absolute bg-white h-[300px]">
 <div>
  {products.map((product, index) => {
    let linked = product === "home" ? "/" : `/${product}`;
    return (
      <div key={index}>
        <NavLink to={linked} style={({ isActive }) => ({color: isActive ? '#fbaf85' : 'black' })} end>
          <li className="uppercase sm:mr-3 sm:text-[20px] hover:underline text-[20px] pt-5 list-none">
            {product}
          </li>
        </NavLink>
      </div>
    );
  })}
 </div>
</div>
 }
 </>
  
  )
}

export default Navbar