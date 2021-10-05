/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./images/forgetlogo.png";
import loginBarner from "./images/login-barner.png";
import eye from "./images/eye.png";
import googleIcon from "./images/google-icon.png";

import Message from "./products/groceries/Message";
import Loader from "./products/groceries/Loader";
import { login } from "../actions/userActions";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      // history.pushState(redirect)
      history.push("/products/groceries");
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 main_cap">
          <div className=" p-5 ">
            <div className="d-flex  justify-content-center">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
              {/* <h2
                className="text-primary ml-3"
                style={{ fontSize: "32.35", fontWeight: "700" }}
              >
                Verdant Digital
              </h2> */}
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Login To your Account
              </p>
            </div>

            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}

            <form onSubmit={submitHandler} className="form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="email"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="form-group drop">
                <div>
                <input className="checkbox" type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" id="checkbox-label">
                  Remember Me
                </label>
                </div>
                <p><LinkContainer to="/forgetpassword">
                <a>Fogot Password?</a>
              </LinkContainer></p>
               
              </div>
              <div className="mb-5">
                <input
                  className="btn btn-primary btn-block btn-lg"
                  type="submit"
                  value="Login"
                />
                {/* <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button> */}
              </div>

              <div className="or-container">
                <div className="left-line" />
                <span>or</span>
                <div className="right-line" />
              </div>
            </form>

            <div className="mt-5" />
            <div className="mt-5" />

            <button
              type="button"
              className="btn btn-outline-primary btn-lg btn-block"
            >
              <div>
                <img
                  src={googleIcon}
                  alt="Google Icon"
                  className="mr-1 img-fluid"
                />
                Google
              </div>
            </button>

            <p className="no-account text-center">
              Don&apos;t have an account?
              {/* <LinkContainer to={redirect ? `/register?redirect=${redirect}` : "/signup"}>  */}
              <LinkContainer to="/signup">
                <a>Create an account</a>
              </LinkContainer>
              {/* <a href="#">Create an account</a> */}
            </p>
          </div>
        </div>

         
            <img src={loginBarner} className="col-lg-6"  alt="Login Barner" />
      </div>
    </div>
  );
};

export default Login;
