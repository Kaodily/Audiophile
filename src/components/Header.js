import logoIcon from "./../assets/shared/desktop/logo.svg";
import hamburgerIcon from "./../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "./../assets/shared/desktop/icon-cart.svg";
const Header = () => {
  return (
    <header className="flex justify-between px-5 py-6 w-[100%} h-[70px] items-center shadow-sm bg-black">
      <div>
        <img src={hamburgerIcon} alt="hamburgerIcon" />
      </div>
      <div>
        <img src={logoIcon} alt="logo" />
      </div>
      <div>
        <img src={cartIcon} alt="cartIcon" />
      </div>
    </header>
  );
};
export default Header;
