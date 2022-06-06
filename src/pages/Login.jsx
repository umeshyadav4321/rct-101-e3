import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <Link to="/products">products</Link><br /> */}
      {/* <Link to="/login">Login </Link><br /> */}
      <input data-cy="login-email" type="text" placeholder="Enter Email"/><br />
      <input data-cy="login-password" type="password" placeholder="Enter Password" /><br />
      <button data-cy="login-submit" >Login</button>
    </div>
  );
};

export default Login;
