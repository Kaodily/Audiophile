import React from 'react';


const Shipping = () => {
  return (
  <form className="p-5">
  <label className="" htmlFor="Address">Address</label>
  <input id ="Address" type="Address" className="w-[100%] mb-6 rounded-md  mt-2 h-[50px] border-2 border-gray-200" />
<label htmlFor="Zipcode">Zipcode</label>
<input id ="Zipcode" type="text" className="w-[100%] rounded-md mb-6 h-[50px] mt-2 border-2 border-gray-200" />
  <label htmlFor="City">City</label>
<input id ="City" type="City" className="w-[100%] mb-6 h-[50px] rounded-md  mt-2 border-2 border-gray-200" />
  <label htmlFor="Country">Country</label>
<input id ="Country" type="Country" className="w-[100%] rounded-md  mb-6  mt-2 h-[50px] border-2 border-gray-200" />
</form>
  
  )
}

export default Shipping