import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { generalActions } from "../../store/general-slice";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  // const {isNav} = useSelector(state => state.general)
  const products = ["home", "headphones", "speakers", "earphones"];
  const dispatch = useDispatch();
  const cartHandleClick = () => {
    dispatch(cartActions.cartIsOpen());
  };
  const openNavbar = () => {
    dispatch(generalActions.openNav());
  };

  return (
    <div className="w-[100%] sticky z-[1] top-0">
      <header className="flex justify-between px-5 py-6 w-[100%} h-[100px] md:px-[5%] lg:pl-[10%] lg:pr-[7%] items-center shadow-sm bg-black">
        <div onClick={openNavbar} className="lg:hidden">
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
        <ul className=" text-white hidden lg:flex lg:ml-[-110px]">
          {products.map((product, index) => {
            let linked = product === "home" ? "/" : `/${product}`;
            return (
              <li
                className="uppercase sm:mr-3 cursor-pointer sm:text-[20px] text-[14px] pt-1 list-none"
                key={index}>
                <NavLink
                  to={linked}
                  style={({ isActive }) => ({
                    color: isActive ? "#fbaf85" : "white",
                  })}
                  className="text-[12px] sm:text-[14px] "
                  end>
                  {product}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div onClick={cartHandleClick} className="flex cursor-pointer">
          <img src="../assets/shared/desktop/icon-cart.svg" alt="cartIcon" />
          <sub className="text-red-500 text-center ml-1">
            {cart.length <= 0 ? null : cart.length}
          </sub>
        </div>
      </header>
    </div>
  );
};
export default Header;
