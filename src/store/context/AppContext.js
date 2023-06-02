import React, { createContext, useEffect, useState } from "react";
import datas from "../../data.json";

export const Context = createContext(null);
const AppContext = ({ children }) => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    window.addEventListener("resize", windowListener);
    return () => {
      window.removeEventListener("resize", windowListener);
    };
  }, [width]);

  function windowListener() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Context.Provider value={{ datas, width }}>{children}</Context.Provider>
  );
};

export default AppContext;
