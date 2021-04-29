import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OverlayContainer from "../Components/OverlayContainer";
import Title from "../Components/Title";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import URL from "../Components/URL";

import { login, validate } from "../lib/network";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  let history = useHistory();

  useEffect(() => {
    validate().then((response) => {
      if (response.data.success) {
        history.push("/");
      }
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    login(data)
      .then((response) => {
        toast.success(response.data.message);
        setData({ username: "", password: "" });
        history.push("/");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else if (err.request) {
          toast.error(err.request);
        } else {
          toast.error(err.message);
        }
      });
  };

  const handleOnChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <OverlayContainer>
        <Title text="Sign In" />
        <Form handleOnSubmit={handleOnSubmit}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            handleOnChange={handleOnChange("username")}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            handleOnChange={handleOnChange("password")}
          />
          <Button type="submit" style="primary" text="Submit" />
          <URL path="/register" text="Sign Up" />
        </Form>
      </OverlayContainer>
    </>
  );
};

export default Login;
