import React from 'react'

const Billing = () => {
  return (
<form className="p-5">
<label htmlFor="name">Name</label>
<input id ="name" type="text" className="w-[100%] rounded-md mb-6 mt-2 h-[50px] border-2 border-gray-200" />
  <label htmlFor="email">Email</label>
<input id ="email" type="email" className="w-[100%] mb-6 mt-2 h-[50px] rounded-md  border-2 border-gray-200" />
  <label htmlFor="phone number">Phone Number</label>
<input id ="phone number" type="phone number" className="w-[100%] rounded-md  mb-6 mt-2 h-[50px] border-2 border-gray-200" />
  
</form>
  )
}

export default Billing
