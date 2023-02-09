import { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import {Link} from 'react-router-dom'



const Cart = () => {
  const { cart, quantity } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [count, setCount] = useState(quantity);
  const increaseHandleClick = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseHandleClick = () => {
    count <= 0 ? setCount(0) : setCount((prev) => prev - 1);
  };
  const removeAll = () => {
    dispatch(cartActions.removeAll())
  }
  const Checkout = () => {
    dispatch(cartActions.checkout())
  }
  console.log(cart)
  // const total = cart.length >= 2 ? cart.reduce((a,b)=>a.price + b.price) : cart.price
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between" >
        <h4>
          Cart(
          <span>{cart.length}</span>)
        </h4>
        <p className="" onClick={removeAll}> Remove All</p>
      </div>
      {cart.map(item => {
        return (
          <div key={item.id} className='flex justify-around my-3'>
            <div>
              <img className="w-12 rounded-md mt-4" src={`${'.'}${item.image.mobile}`} alt={item.name} />
            </div>
            <div className="w-24 mt-4 text-[12px]">
              <h4>{item.name}</h4>
              <p>${item.price * count}</p>
            </div>
            <div>
              <button className="w-[90px] rounded-md h-[40px] mt-6 font-medium flex justify-around py-2 bg-[#F1F1F1]">
                <span onClick={decreaseHandleClick} className="text-center">
                  -
                </span>{count}
                <span onClick={increaseHandleClick}>+</span>
              </button>
            </div>

          </div>
        )
      })}
      <div className="py-1 my-4 flex justify-between">
        <p>TOTAL</p>
        <p>$0</p>
      </div>
      <div className="flex justify-center">
      <Link to={"/Checkout"}>
      <button disabled={cart.length <= 0} onClick={Checkout} className=" w-[18rem] disabled:bg-[#f7bfa1] lg:w-[20rem] text-[14px] tracking-widest text-white h-[50px] bg-[#D87D4A]">
          CHECKOUT
        </button>
      </Link>

      </div>
    </div>
  );
};
const CartComponent = () => {
  const cartIsOpen = useSelector(state => state.cart.isOpen)
  return (
    cartIsOpen && (
      <div className="max-h-96 w-[90%] lg:w-[35%] sm:w-[45%] sm:left-[75%] lg:left-[75%] top-[100px] z-10 left-[50%] translate-x-[-50%]  bg-white rounded-md absolute  overflow-scroll">
        <Cart />
      </div>
    )
  );
};
const Backdrop = () => {
  const cartIsOpen = useSelector(state => state.cart.isOpen)
  const dispatch = useDispatch();

  const backdropHandleClick = () => {
    dispatch(cartActions.backdropHandleClick())
  }
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
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <CartComponent />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Exportmodal;
