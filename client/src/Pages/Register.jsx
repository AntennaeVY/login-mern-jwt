import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OverlayContainer from "../Components/OverlayContainer";
import Title from "../Components/Title";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";

import { register, validate } from "../lib/network";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  let history = useHistory();

  useEffect(() => {
    validate().then((response) => {
      if (response.data.success) {
        history.push("/");
      }
    });

    console.log("Register");
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    register(data)
      .then((response) => {
        toast.success(response.data.message);
        setData({ username: "", email: "", password: "" });
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
        <Title text="Sign Up" />
        <Form handleOnSubmit={handleOnSubmit}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            handleOnChange={handleOnChange("username")}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            handleOnChange={handleOnChange("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            handleOnChange={handleOnChange("password")}
          />
          <Button type="submit" style="primary" text="Submit" />
          <Link to="/login" className="mt-2 text-xs text-blue-400">
            Sign In
          </Link>
        </Form>
      </OverlayContainer>
    </>
  );
};

export default Register;
