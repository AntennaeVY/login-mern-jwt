import React from "react";

const Title = (props) => {
  const { text } = props;

  return <h1 className="text-2xl">{text}</h1>;
};

export default Title;
