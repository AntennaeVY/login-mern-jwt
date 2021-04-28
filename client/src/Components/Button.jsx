import React from "react";

const Button = (props) => {
  const { type = "", style, text } = props;

  const styles = {
    primary: "bg-blue-400 hover:bg-blue-500 focus:bg-blue-500",
    secondary: "",
  };

  return (
    <button
      type={type}
      className={`my-2 px-5 py-2 rounded-2xl focus:outline-none ${styles[style]}`}
    >
      {text}
    </button>
  );
};

export default Button;
