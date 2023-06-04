import React from "react";
import Input from "./Input";

const Billing = () => {
  return (
    <div className="p-5 font-bold text-[13px] ">
      <h2 className="pb-3 font-bold text-[23px]">CHECKOUT</h2>
      <h3 className="mb-4 font-bold text-[#fbaf85] ">BILLING DETAILS</h3>
      <div className="sm:grid grid-cols-2 gap-x-3">
        <Input name={"Name"} type={"text"} />
        <Input name={"Email"} type={"email"} />
        <Input name={"Phone Number"} type={"number"} />
      </div>
    </div>
  );
};

export default Billing;
