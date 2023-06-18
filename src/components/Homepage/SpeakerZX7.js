import React from "react";
import { Link } from "react-router-dom";
const SpeakerZX7 = () => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center bg-[url('../public/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('../public/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('../public/assets/home/desktop/image-speaker-zx7.jpg')] h-[250px] lg:h-[300px] mt-12 mx-[30px] lg:mx-[9%] lg:pt-12 sm:col-span-4 pt-24 px-9 rounded-md text-black  ">
      <h3 className="font-bold text-[20px] tracking-widest">ZX7 SPEAKER</h3>
      <Link to={"/speakers/zx7-speaker"}>
        <button className="uppercase w-[130px]  sm:w-[180px] sm:h-[60px] sm:text-[14px] text-[12px] mt-8 h-[40px] border-2 border-black">
          See product
        </button>
      </Link>
    </div>
  );
};
export default SpeakerZX7;
