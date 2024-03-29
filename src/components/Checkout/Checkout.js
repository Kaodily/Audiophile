import React from "react";
import Goback from "../Utiliies/Goback";
import Billing from "./Billing";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Summary from "./Summary";

const Checkout = () => {
  return (
    <div>
      <Goback />
      <div>
        <form className="lg:flex lg:ml-[6%] lg:mr-[5%] lg:mb-20">
          <div className=" lg:w-[97%] sm:mx-12 mx-5 shadow-md rounded-md bg-white">
            <Billing />
            <Shipping />
            <Payment />
          </div>
          <Summary />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
