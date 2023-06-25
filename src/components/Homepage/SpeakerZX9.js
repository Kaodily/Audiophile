import React from "react";
import { Link } from "react-router-dom";
const SpeakerZX9 = () => {
  return (
    <div className="bg-[url('../public/assets/home/desktop/pattern-circles.svg')] bg-top bg-cover sm:bg-bottom bg-no-repeat lg:bg-left lg:bg-contain  h-[500px] sm:h-[580px] lg:flex lg:justify-between  mt-16 bg-[#D87D4A] mx-[30px] lg:mx-[9%] py-8 rounded-md lg:text-left text-white text-center ">
      <div>
        <img
          src="../assets/home/desktop/image-speaker-zx9.png"
          className="w-[150px] sm:w-[200px] lg:w-[380px] mx-auto pt-3 lg:pt-[90px]  lg:ml-[100px]"
          alt="speakerzx9"
        />
      </div>
      <div className="lg:pt-[140px] lg:pl-[180px]">
        <h2 className="text-center lg:text-left text-[22px] pt-5 font-bold sm:px-[190px] lg:text-[30px] md:px-[250px] lg:px-[0] tracking-widest px-[100px] ">
          ZX9 SPEAKER
        </h2>
        <p className="px-[40px] text-[14px]  lg:w-[400px] sm:text-[16px] sm:px-[120px] md:px-[140px] lg:px-[0]  py-5 opacity-50">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to={"/speakers/zx9-speaker"}>
          <button className="uppercase w-[150px] sm:w-[180px] sm:h-[60px] sm:text-[14px]  text-[12px] mt-3 h-[40px] bg-black">
            See product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SpeakerZX9;
