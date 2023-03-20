import { NavLink, Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { generalActions } from "../../store/general-slice";

const Header = () => {
  const { cart } = useSelector(state => state.cart)
  // const {isNav} = useSelector(state => state.general)
  const products = ["home", "headphones", "speakers", "earphones"];
  const dispatch = useDispatch()
  const cartHandleClick = () => {
  dispatch(cartActions.cartIsOpen())
};
const openNavbar = () =>{
  dispatch(generalActions.openNav())
}


  return (
    <header className="flex justify-between px-5 py-6 w-[100%} h-[100px] md:px-[5%] lg:pl-[10%] lg:pr-[7%] items-center shadow-sm bg-[#0C0C0C]">
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
      <div  className=' text-white hidden lg:flex lg:ml-[-110px]'>
      {products.map((product, index) => {
        let linked = product === "home" ? "/" : `/${product}`;
        return (
          <div key={index}>
            <NavLink to={linked} style={({ isActive }) => ({color: isActive ? '#fbaf85' : 'white'})} end>
          <li className="uppercase sm:mr-3 sm:text-[20px] text-[20px] pt-1 list-none">
            {product}
          </li>
        </NavLink>
          </div>
        );
      })}
     </div>
      <div onClick={cartHandleClick} className='flex'>
        <img src="../assets/shared/desktop/icon-cart.svg" alt="cartIcon" />
        <sub className="text-red-500 text-center ml-1">{cart.length <= 0 ? null :cart.length}</sub>
      </div>
    </header>
  );
};
export default Header;
