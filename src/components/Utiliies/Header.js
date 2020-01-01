import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../App";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Header = () => {
  const { cart } = useContext(DataContext);
  const products = ["home", "headphones", "speakers", "earphones"];
  const dispatch = useDispatch()
  const cartHandleClick = () => {
  dispatch(cartActions.cartIsOpen())
  // const uniqueCart = cartSize.filter((product, index) => cartSize.indexOf(product) === index)
  // setCart(uniqueCart)
};
  return (
    <header className="flex justify-between px-5 py-6 w-[100%} h-[70px] md:px-[5%] lg:pl-[8%] lg:pr-[5%] items-center shadow-sm bg-black">
      <div className="lg:hidden">
        <img
          src="../assets/shared/tablet/icon-hamburger.svg"
          alt="hamburgerIcon"
        />
      </div>
      <Link to={"/"}>
        <div>
          <img src="../assets/shared/desktop/logo.svg" alt="logo" />
        </div>
      </Link>
      <div  className=' text-white hidden lg:flex lg:ml-[-110px]'>
      {products.map((product, index) => {
        let linked = product === "home" ? "/" : `/${product}`;
        return (
          <div key={index}>
            <Link to={linked}>
              <li className="uppercase sm:mr-3 sm:text-[14px] text-[12px] pt-2 list-none">
                {product}
              </li>
            </Link>
          </div>
        );
      })}
     </div>
      <div onClick={cartHandleClick} className='flex'>
        <img src="../assets/shared/desktop/icon-cart.svg" alt="cartIcon" />
        <sub className="text-white text-center ml-1">{cart.length}</sub>
      </div>
    </header>
  );
};
export default Header;
