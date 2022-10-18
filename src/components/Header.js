import { useContext } from "react";
import { CartContext } from "../App";

const Header = () => {
  const {cartHandleClick} = useContext(CartContext)
  return (
    <header className="flex justify-between px-5 py-6 w-[100%} h-[70px] items-center shadow-sm bg-black">
      <div>
        <img src="../assets/shared/tablet/icon-hamburger.svg" alt="hamburgerIcon" />
      </div>
      <div>
        <img src="../assets/shared/desktop/logo.svg" alt="logo" />
      </div>
      <div onClick={cartHandleClick} >
        <img src="../assets/shared/desktop/icon-cart.svg" alt="cartIcon" />
      </div>
    </header>
  );
};
export default Header;
