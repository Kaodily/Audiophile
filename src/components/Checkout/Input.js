import React, { useContext } from "react";
import { Context } from "../../store/context/AppContext";

const Input = ({ name, type }) => {
  const { formChange } = useContext(Context);

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        onChange={formChange}
        id={name}
        type={type}
        name={name}
        className="w-[100%] rounded-md mb-6 mt-2 h-[50px] border-2 border-gray-200"
        required
      />
    </div>
  );
};

export default Input;
