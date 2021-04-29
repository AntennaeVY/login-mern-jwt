import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { logout } from "../lib/network";

const Logout = () => {
  let history = useHistory();

  useEffect(() => {
    logout()
      .then(() => {
        history.push("/login");
      })
      .catch(() => {
        history.push("/register");
      });
  }, []);

  return (
    <>
      <div>Logout Works</div>;
    </>
  );
};

export default Logout;
