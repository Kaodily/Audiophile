import React from "react";
import { Earphones, EarphonesInformation } from "./Earphones";
import Headphones from "./Headphones";
import SpeakerZX7 from "./SpeakerZX7";
import SpeakerZX9 from "./SpeakerZX9";
import Audiogear from "../Utiliies/Audiogear";
import Products from "../Utiliies/Products";
import Footer from "../Utiliies/Footer";

const Home = () => {
  return (
    <section>
      <Headphones />
      <Products />
      <SpeakerZX9 />
      <div className="sm:grid sm:grid-cols-4 ">
        <SpeakerZX7 />
        <Earphones />
        <EarphonesInformation />
      </div>
      <Audiogear />
      <Footer />
    </section>
  );
};
export default Home;
