import { NavLink } from "react-router-dom";

const Footer = () => {
  const products = ["home", "headphones", "speakers", "earphones"];
  const socials = [
    "../assets/shared/desktop/icon-facebook.svg",
    "../assets/shared/desktop/icon-twitter.svg",
    "../assets/shared/desktop/icon-instagram.svg",
  ];
  return (
    <div className=" bg-black text-white text-center lg:px-[5%] sm:pb-7 sm:text-left ">
      <div className="border-t-4 w-[100px] py-5 mx-auto sm:mx-[40px] border-[#D87D4A]"></div>
      <div className="lg:flex justify-between">
        <img
          src="../assets/shared/desktop/logo.svg"
          alt="logoIcon"
          className="mx-auto my-7 sm:mx-[40px] w-[130px] sm:w-[150px]"
        />
        <ul className="sm:flex mx-[40px]">
          {products.map((product, index) => {
            let linked = product === "home" ? "/" : `/${product}`;
            return (
              <li key={index} className="uppercase sm:mr-3 pt-5 list-none">
                <NavLink
                  to={linked}
                  style={({ isActive }) => ({
                    color: isActive ? "#fbaf85" : "white",
                  })}
                  className="text-[12px] sm:text-[16px]"
                  end>
                  {product}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="px-9 lg:w-[50%]  leading-6 font-medium text-[14px] sm:text-[16px] sm:leading-8 my-8 opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="sm:flex sm:justify-between">
        <p className="px-9 leading-6 font-medium text-[12px] opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex justify-center py-9 sm:py-0 sm:mr-5">
          {socials.map((social, index) => (
            <img src={social} key={index} alt={social} className="mr-3" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
