import React from 'react';
import {  useSelector } from "react-redux";
import Total from './Total';


const Summary = () => {
    const { cart } = useSelector(state => state.cart)
  
  return (
    <div className="mx-5 sm:mx-12 lg:w-[50%] shadow-md my-12  h-max  rounded-md py-5 lg:my-5 bg-white">
        <h3 className="px-5">Summary</h3>
        <div >
      <div>
      {cart.map(item => {
        return (
          <div key={item.id} className='flex justify-between items-center px-5 my-3'>
           <div className="flex">
           <div>
              <img className="w-12 rounded-md mt-4" src={`${'.'}${item.image.mobile}`} alt={item.name} />
            </div>
            <div className="w-24 mt-4 ml-5 text-[12px]">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
           </div>
           <p>x2</p>
          </div>
        )
      })}
      </div>
      <div className="px-5 text-[12px] py-2">
      <Total name="TOTAL" price="0"/>
      <Total name="SHIPPING" price="0"/>
      <Total name="VAT (INCLUDED)" price="0"/>
      <Total name="GRAND TOTAL" price="0"/>
        <button className=" w-[100%] text-[14px] tracking-widest text-white h-[50px] bg-[#fbaf85]">
          CONTINUE AND PAY
        </button>
      </div>
        </div>
    </div>
  )
}

export default Summary