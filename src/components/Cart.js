// import { useContext, useState } from "react"
// import { CartContext } from "../App"
// const Cart = () => {
//     const {isCart} = useContext(CartContext)
//     const [count, setCount] = useState(0)
//     const increaseHandleClick = () => {
//         setCount(prev => prev + 1)
//     }
//     const decreaseHandleClick = () => {
//        count <= 0 ? setCount(0) :  setCount(prev => prev - 1)
//     }
   
//     return isCart && (
//             <div className="h-[350px] bg-red-500 absolute top-[20px] mx-[20px] px-7 py-5 rounded-md">
//             <div className="flex justify-between">
//             <h4>Cart (<span>4</span>)</h4>
//              <p>Remove all</p>
//             </div>
//             <div className="flex justify-evenly">
//                 <div>
//                     <img src="" alt="" />
//                 </div>
//                 <div>
//                     <h4>XX99</h4>
//                     <p>2</p>
//                 </div>
//                 <button className="w-[130px] h-[40px] font-medium flex justify-around py-2 bg-[#F1F1F1]"><span onClick={decreaseHandleClick} className="text-center">-</span>{count}<span onClick={increaseHandleClick}>+</span></button>
//             </div>
//             <div className="flex justify-between">
//                 <p>Total</p>
//          <h5>2000</h5>
//             </div>
//         </div>
     
//     )
// }
// const Backdrop = () => {
//     const styles = {
//         position: 'fixed',
//         top: '0',
//         width: '100vw',
//         height: '100vh',
//         zIndex: '2',
//         backgroundColor : 'rgb(0, 0, 0, 0.7)'
//     }
//     return(
//         <div style={styles}></div>
//     )
// }