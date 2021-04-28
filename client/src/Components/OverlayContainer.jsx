import React from "react";

const OverlayContainer = (props) => {
  const { children } = props;

  return (
    <div className="md:p-20 md:bg-gray-200 h-screen w-screen max-w-screen max-h-screen">
      <div className="flex flex-col items-center overflow-auto container md:p-5 m-auto md:rounded-xl md:shadow-xl bg-white h-full md:w-2/5">
        {children}
      </div>
    </div>
  );
};

export default OverlayContainer;
