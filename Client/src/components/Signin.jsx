import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// const jwt = require('jsonwebtoken')

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "http://localhost:5000/signin";
  const signinUser = () => {
    axios
      .post(url, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token)
        console.log("yes signal sent");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="p-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signinUser}
          className="btn btn-primary mt-3 mx-auto d-block w-75"
        >
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Signin;
