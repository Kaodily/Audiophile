import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
const {isNav} = useSelector(state => state.general)
// const dispatch = useDispatch()
  const products = ["home", "headphones", "speakers", "earphones"];
  return (
 <>
 {isNav &&
 <div className="w-full pt-8 px-5 absolute bg-white h-[300px]">
 <div className=' text-yellow  lg:hidden '>
  {products.map((product, index) => {
    let linked = product === "home" ? "/" : `/${product}`;
    return (
      <div key={index}>
        <Link to={linked}>
          <li className="uppercase sm:mr-3 sm:text-[20px] hover:underline text-[20px] pt-5 list-none">
            {product}
          </li>
        </Link>
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