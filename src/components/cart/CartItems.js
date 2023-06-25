import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItems = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increaseCart = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });
    dispatch(cartActions.updateCart(updatedCart));
  };

  const decreaseCart = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    dispatch(cartActions.updateCart(updatedCart));
  };

  return (
    <div className="max-h-[200px] overflow-scroll">
      {cart.map((item) => {
        return (
          <div key={item.id} className="flex justify-between my-3">
            <div className="flex">
              <div>
                <img
                  className="w-12 rounded-md mt-4"
                  src={`${"."}${item.image.mobile}`}
                  alt={item.slug}
                />
              </div>
              <div className="w-24 mt-4 ml-6 text-[12px]">
                <h4>{item.name}</h4>
                <p>${item?.price.toLocaleString()}</p>
              </div>
            </div>

            <div>
              <button className="w-[90px] rounded-md h-[40px] mt-6 font-medium flex justify-around py-2 bg-[#F1F1F1]">
                <span
                  onClick={() => {
                    decreaseCart(item.id);
                  }}
                  className="text-center">
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() => {
                    increaseCart(item.id);
                  }}>
                  +
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
