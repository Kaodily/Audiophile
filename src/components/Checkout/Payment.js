import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from '../../store/checkout.slice';

const Payment = () => {
  const {isVisible} = useSelector(state => state.checkout)

  const dispatch = useDispatch()
  const handleChange = (e) =>{
   const values = {
    value: e.target.value,
    checked:e.target.checked
   }
    dispatch(checkoutActions.paymentHandleChange(values))
  }
  return (
    <div className='p-5 font-bold text-[13px]'>
      <h4 className='mb-4 font-bold text-[#fbaf85] '>PAYMENT DETAILS
</h4>
   <form className="">
<label htmlFor="Payment Method">Payment Method</label>
<div  className="w-[100%] rounded-md mb-6 mt-2 h-[50px] border-2 flex items-center pl-3  border-gray-200">
<input onChange={handleChange} id ="e-money" type="radio"  value="e-money"  name="e-money" className="mr-2" />
<label htmlFor="e-money">e-Money</label>
</div>
<div  className="w-[100%] rounded-md mb-6 mt-2 h-[50px] flex items-center pl-3 border-2 border-gray-200">
<input onChange={handleChange} id ="cash on delivery" type="radio" value="cash on delivery" name="e-money" className="mr-2" />
<label htmlFor="cash on delivery">Cash on Delivery</label>
</div>
{isVisible &&
<div>
  <label htmlFor="e-Money Number">e-Money Number</label>
  <input id ="e-Money Number" type="text" className="w-[100%] rounded-md  mb-6 mt-2 h-[50px] border-2 border-gray-200" />
    <label htmlFor="e-Money PIN">e-Money PIN</label>
  <input id ="e-Money PIN" type="text" className="w-[100%] rounded-md  mb-6 mt-2 h-[50px] border-2 border-gray-200" />
</div>
  }
   </form>
    </div>
  )
}

export default Payment