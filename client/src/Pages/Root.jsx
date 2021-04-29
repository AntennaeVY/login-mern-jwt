import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import URL from "../Components/URL";

import { validate } from "../lib/network";

const Root = () => {
  let history = useHistory();

  useEffect(() => {
    validate().then((response) => {
      if (!response.data.success) {
        history.push("/login");
      }
    });
  }, []);

  return (
    <>
      <div>Root Works</div>
      <URL path="/logout" text="Log Out" />
    </>
  );
};

export default Root;
