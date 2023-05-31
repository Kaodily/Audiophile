import React from "react";

const Billing = () => {
  return (
    <div className="p-5 font-bold text-[13px] ">
      <h2 className="pb-3 font-bold text-[23px]">CHECKOUT</h2>
      <h4 className="mb-4 font-bold text-[#fbaf85] ">BILLING DETAILS</h4>
      <form className="sm:grid grid-cols-2 gap-x-3">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-[100%] rounded-md mb-6 mt-2 h-[50px] border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-[100%] mb-6 mt-2 h-[50px] rounded-md  border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="phone number">Phone Number</label>
          <input
            id="phone number"
            type="phone number"
            className="w-[100%] rounded-md  mb-6 mt-2 h-[50px] border-2 border-gray-200"
          />
        </div>
      </form>
    </div>
  );
};

export default Billing;
