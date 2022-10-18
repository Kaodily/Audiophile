import { Link } from "react-router-dom";
const Footer = () => {
  const products = ["home", "headphones", "speakers", "earphones"];
  const socials = [
    "../assets/shared/desktop/icon-facebook.svg",
    "../assets/shared/desktop/icon-twitter.svg",
    "../assets/shared/desktop/icon-instagram.svg",
  ];
  return (
    <div className=" bg-black text-white text-center ">
      <div className="border-t-4 w-[100px] py-5 mx-auto border-[#D87D4A]"></div>
      <img
        src="../assets/shared/desktop/logo.svg"
        alt="logoIcon"
        className="mx-auto mb-12 w-[130px]"
      />

      {products.map((product, index) => {
        let linked = product === "home" ? "/" : `/${product}`;
        return (
          <div key={index}>
            <Link to={linked}>
              <li className="uppercase text-[11px] pt-4 list-none">
                {product}
              </li>
            </Link>
          </div>
        );
      })}
      <p className="px-9 leading-6 font-medium text-[14px] my-8 opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="px-9 leading-6 font-medium text-[14px] opacity-50">
        Copyright 2021. All Rights Reserved
      </p>
      <div className="flex justify-center py-9">
        {socials.map((social, index) => (
          <img src={social} key={index} alt={social} className="mr-3" />
        ))}
      </div>
    </div>
  );
};
export default Footer;
