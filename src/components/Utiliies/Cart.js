import { useContext, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { DataContext } from "../../App";

const Cart = () => {
    const { cart } = useContext(DataContext);
  const [cartQuantity,setCartQuantity] = useState(0)
  const [count, setCount] = useState(0);
  const increaseHandleClick = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseHandleClick = () => {
    count <= 0 ? setCount(0) : setCount((prev) => prev - 1);
  };
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between" >
        <h4>
          Cart(
         <span>{cart.length}</span>)
        </h4>
        <p>Remove All</p>
          </div>
          {cart.map(item => {
              return (
                  <div key={item.id} className='flex justify-around my-3'>
                      <div>
                    <img className="w-12 mt-4" src={`${'.'}${item.image.mobile}`} alt={item.name} />   
                      </div>
                      <div className="w-24 mt-4 text-[12px]">
                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                      </div>
                      <div>
                      <button className="w-[90px] h-[40px] mt-6 font-medium flex justify-around py-2 bg-[#F1F1F1]">
                  <span onClick={decreaseHandleClick} className="text-center">
                    -
                              </span>1
                              <span onClick={increaseHandleClick}>+</span>
                </button>
                      </div>
                  </div>
              )
          })}
    </div>
  );
};
const CartComponent = () => {
  const { isCart } = useContext(DataContext);
  return (
    isCart && (
      <div className="max-h-96 w-[90%] sm:w-[45%] sm:left-[75%] top-[100px] z-10 left-[50%] translate-x-[-50%]  bg-white rounded-md absolute  overflow-scroll">
        <Cart />
      </div>
    )
  );
};
const Backdrop = () => {
  const { isCart, backdropHandleClick } = useContext(DataContext);
  const styles = {
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "2",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    transition: "ease-in",
  };
  return isCart && <div style={styles} onClick={backdropHandleClick}></div>;
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
