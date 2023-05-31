import React from "react";

const Shipping = () => {
  return (
    <div className="p-5 font-bold text-[13px] ">
      <h4 className="mb-4 font-bold text-[#fbaf85] ">SHIPPING INFO</h4>
      <form className=" lg:grid gap-x-3 grid-cols-2">
        <div className="col-span-2">
          <label className="" htmlFor="Address">
            Address
          </label>
          <input
            id="Address"
            type="Address"
            className="w-[100%]  mb-6 rounded-md  mt-2 h-[50px] border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="Zipcode">Zipcode</label>
          <input
            id="Zipcode"
            type="text"
            className="w-[100%] col rounded-md mb-6 h-[50px] mt-2 border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="City">City</label>
          <input
            id="City"
            type="City"
            className="w-[100%] mb-6 h-[50px] rounded-md  mt-2 border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="Country">Country</label>
          <input
            id="Country"
            type="Country"
            className="w-[100%] rounded-md  mb-6  mt-2 h-[50px] border-2 border-gray-200"
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
