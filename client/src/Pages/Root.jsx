import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { validate } from "../lib/network";

const Root = () => {
  let history = useHistory();

  useEffect(() => {
    validate().then((response) => {
      if (!response.data.success) {
        history.push("/login");
      }
    });

    console.log("Root");
  }, []);

  return (
    <>
      <div>Root Works</div>
    </>
  );
};

export default Root;
