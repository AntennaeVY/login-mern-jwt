import React from "react";

const Input = (props) => {
  const { type, placeholder, value, name, handleOnChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className="w-full m-2 px-2 py-1 border-2 border-gray-500 focus:border-gray-900 rounded-lg"
      onChange={handleOnChange}
    ></input>
  );
};

export default Input;
