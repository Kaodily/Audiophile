import ReactDOM from "react-dom";
import CartComponent from "../cart/Cart";
import Navbar from "./Navbar";

const Exportmodal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Navbar />, document.getElementById("nav"))}
      {ReactDOM.createPortal(
        <CartComponent />,
        document.getElementById("cart")
      )}
    </>
  );
};
export default Exportmodal;
