import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartItems from "../cart/CartItems";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItem = () => {
    let arr = cart.map((item) => item.price * item.quantity);
    let totalSum = arr.reduce((accum, incre) => accum + incre);
    setTotal(totalSum);
  };

  useEffect(() => {
    totalItem();
  });

  const removeAll = () => {
    dispatch(cartActions.removeAll());
  };
  const Checkout = () => {
    dispatch(cartActions.checkout());
  };
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between">
        <h4>
          Cart(
          <span>{cart.length}</span>)
        </h4>
        <p className="" onClick={removeAll}>
          Remove All
        </p>
      </div>
      <CartItems />
      <div className="py-1 my-4 flex justify-between">
        <p>TOTAL</p>
        <p>${total.toLocaleString()}</p>
      </div>
      <div className="flex justify-center">
        <Link to={"/Checkout"}>
          <button
            disabled={cart.length <= 0}
            onClick={Checkout}
            className=" w-[18rem] disabled:bg-[#f7bfa1] lg:w-[20rem] text-[14px] tracking-widest text-white h-[50px] bg-[#D87D4A]">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

const CartComponent = () => {
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  return (
    cartIsOpen && (
      <div className="max-h-96 w-[90%] lg:w-[35%] sm:w-[45%] sm:left-[75%] lg:left-[75%] top-[100px] z-10 left-[50%] translate-x-[-50%]  bg-white rounded-md absolute  overflow-scroll">
        <Cart />
      </div>
    )
  );
};

export default CartComponent;
