import React, { useContext } from "react";
import Input from "./Input";
import { Context } from "../../store/context/AppContext";

const Shipping = () => {
  const { formChange } = useContext(Context);
  return (
    <div className="p-5 font-bold text-[13px] ">
      <h4 className="mb-4 font-bold text-[#fbaf85] ">SHIPPING INFO</h4>
      <div className=" md:grid gap-x-3 grid-cols-2">
        <div className="col-span-2">
          <label className="" htmlFor="Address">
            Address
          </label>
          <input
            name="Address"
            id="Address"
            type="Address"
            onChange={formChange}
            className="w-[100%]  mb-6 rounded-md  mt-2 h-[50px] border-2 border-gray-200"
          />
        </div>
        <Input name={"Zipcode"} type={"text"} />
        <Input name={"City"} type={"text"} />
        <Input name={"Country"} type={"text"} />
      </div>
    </div>
  );
};

export default Shipping;
