import { useContext } from "react";
import { DataContext } from "../../App";
import { FeaturesContext } from "./Features";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import '../../index.css'

const Details = () => {
const dispatch = useDispatch();
const {count} = useSelector(state=> state.cart)
const { filtered } = useContext(FeaturesContext);
const {width } = useContext(DataContext);
    const addToCart = (product,count) => {
      let items = {product,count}
      dispatch(cartActions.addItem(items))
      // const item = product
      // item.cartQuantity = count;
      // setCartSize(prev => [...prev, item])
      // setTimeout(() => {
      // },1000)
     
    }
    const increaseHandleClick = () => {
      dispatch(cartActions.increase())
    };
    const decreaseHandleClick = () => {
      dispatch(cartActions.decrease())
    };
  return (
    <div>
      {filtered.map((product) => {
        let image = product.image.mobile
        if (width >= 768 && width <= 1024) {
          image = product.image.tablet
        } else if (width > 1024) {
         image = product.image.desktop
        }
        return (
          <div key={product.id} className='lg:mx-[130px] '>
            <div className="md:grid grid-cols-2 text-left ">
              <div className="mx-[10px] md:mx-0 rounded-md px-8 py-3  ">
                <img src={`${"."}${image}`} alt={product.name} />
              </div>
              <div className="lg:pr-[200px] md:pt-36 lg:pt-24 md:leading-6">
                <h2 className="font-bold text-[20px] sm:text-[22px] lg:w-[180px] ml-9 py-4  tracking-widest uppercase">
                  {product.name}
                </h2>
                <p className="px-9 leading-6 lg:w-[500px] font-medium text-[14px] sm:text-[16px] sm:leading-8 opacity-50">
                  {product.description}
                </p>
                <p className="text-[12px] sm:text-[16px] font-bold py-4 px-9">
                  $ {product.price}
                </p>
                <div className="flex pl-9">
                  <div>
                  <button className="w-[130px] sm::w-[150px] sm:h-[60px] h-[40px] font-medium flex justify-around py-2 sm:py-5 bg-[#F1F1F1]">
                    <span onClick={decreaseHandleClick} className="text-center">
                      -
                    </span>
                    {count}
                    <span onClick={increaseHandleClick}>+</span>
                  </button>
                 </div>
                  <div>
                  <button
                    className="uppercase w-[150px] sm::w-[150px] sm:h-[60px] sm:text-[16px] font-medium text-[14px] mx-2 text-white h-[40px] bg-[#D87D4A]"
                    onClick={() =>
                      count > 0 ? addToCart(product, count) : null
                    }
                  >
                    ADD TO CART
                  </button>
                 </div>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:grid grid-cols-2">
                <div>
                <h4 className="font-bold text-[14px] ml-9 pt-14 pb-3 sm:text-[20px] tracking-widest uppercase">
                Features
              </h4>
              <p className="px-9 leading-6 font-medium text-[14px] sm:text-[16px] sm:leading-8 opacity-50">
                {product.features}
              </p>
                </div>
                <div className="md:flex md:justify-between lg:block lg:ml-24  ">
              <h4 className="font-bold text-[14px]  ml-9 pt-14 lg:pt-16 pb-3 sm:text-[20px]  sm:pt-5 tracking-widest uppercase">
                In the box
              </h4>
              <div className="sm:pt-5 sm:pr-12">
                {product.includes.map((content, index) => {
                  return (
                    <div key={index} className="flex list-none  pl-9 mb-2">
                      <p className="font-medium text-[14px] sm:text-[16px] text-[#a48877] ">
                        {content.quantity}x
                      </p>
                      <li className="pl-3 lading-6 font-medium text-[14px] sm:text-[16px] opacity-50">
                        {content.item}
                      </li>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
         
          </div>
            <div className="mx-[10px] sm:flex rounded-md px-8 py-20 text-black  ">
              <div className="sm:mr-6" >
                <div className="sm:mb-6">
                <img
                className="rounded-md mb-3 sm:mb-[10px] "
                src={`${"."}${width >= 768 && width <= 1024 ? product.gallery.first.mobile : product.gallery.first.desktop}`}
                alt={product.name}
              />
              </div>
              <div className="">
              <img
                className="rounded-md mb-3 "
                src={`${"."}${width >= 768 && width <= 1024 ? product.gallery.second.mobile : product.gallery.second.desktop}`}
                alt={product.name}
              />
              </div>
            </div>
              <div>
              <img
                  className="rounded-md mb-3 "
                  // style={width > 1024 ? { height: '570px' } : { height: '350px' }}
                src={`${"."}${width >= 768 && width <= 1024 ? product.gallery.third.mobile : product.gallery.third.desktop}`}
                alt={product.name}
              />
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Details;
