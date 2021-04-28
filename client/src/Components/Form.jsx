import React from "react";

const Form = (props) => {
  const { handleOnSubmit, children } = props;

  return (
    <form
      className="flex flex-col items-center md:p-10 w-80 "
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
