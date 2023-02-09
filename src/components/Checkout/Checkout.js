import React from 'react';
// import Goback from '../Utiliies/Goback';
import Billing from "./Billing"
import Payment from './Payment';
import Shipping from './Shipping';
import Summary from './Summary';

const Checkout = () => {
  return (
   <div>
     {/* <Goback /> */}
    <div className='lg:flex lg:ml-[8%] mr-[7%]'>
    <div className='w-full mx-5 my-6 shadow-md rounded-md bg-white'>
     <Billing />
     <Shipping />
     <Payment />
    </div>
     <Summary />
    </div>
   </div>
  )
}

export default Checkout