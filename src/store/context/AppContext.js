import React, { createContext, useEffect, useState } from "react";
import datas from "../../data.json";

export const Context = createContext(null);

const formData = {
  Name: "",
  Email: "",
  "Phone Number": "",
  Address: "",
  Zipcode: "",
  Country: "",
  City: "",
};

const AppContext = ({ children }) => {
  const [form, setForm] = useState(formData);
  useEffect(() => {}, []);

  const formChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(form);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Context.Provider value={{ datas, formChange, setForm }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
