import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartComponent from "../cart/Cart";

const Backdrop = () => {
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const backdropHandleClick = () => {
    dispatch(cartActions.backdropHandleClick());
  };
  const styles = {
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "2",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    transition: "ease-in",
  };
  return cartIsOpen && <div style={styles} onClick={backdropHandleClick}></div>;
};

const Exportmodal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <CartComponent />,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Exportmodal;
