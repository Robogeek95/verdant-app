/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Logo from "./images/forgetlogo.png";
import eye from "./images/eye.png";

import signupBarner from "./images/signup-barner.png";
import Loader from "./products/groceries/Loader";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
// import { Dot } from "react-bootstrap-icons";

const Signup = ({ location, history }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setMessage] = useState(null);
  const dispatch = useDispatch({ history });

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push("/products/groceries");
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(firstname, lastname, email, phone, password));
      history.push("/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ marginRight: "10rem" }}>
        <div
          className="col-6"
          style={{
            background: `url(${signupBarner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            left: 0,
            height: "100vh",
          }}
        >
          {/* <div className="h-100 w-100"></div> */}
          <div className="mt-5 ml-4 d-flex align-items-end  ">
            <p className="h2 text-white">
              Send Goods and Services <br /> with ease
              <span style={{ color: "#F6C54C" }}>.</span>{" "}
            </p>
          </div>
        </div>

        <div className="col-6"></div>
        <div className="col-6">
          <div className="row justify-content-end">
            <div className="col-8">
              <div className="mt-4">
                <Link to="/">
                  <img src={Logo} alt="Brand Logo" />
                </Link>
                {/* <h2
                className="text-primary ml-3"
                style={{ fontSize: "32.35", fontWeight: "700" }}
              >
                Verdant Digital
              </h2> */}
              </div>
              <div className="text-center text-dark my-5">
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  Create your account to begin an amazing experience
                </p>
              </div>

              {loading && <Loader />}

              <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    className="first-name"
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    className="last-name"
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="phone"
                    type="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    className="confirm-password"
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <img src={eye} alt="eye" className="eye" />
                </div>
                <div className="mb-5">
                  <input
                    className="btn btn-primary btn-block btn-lg"
                    type="submit"
                    value="Sign Up"
                  />
                  {/* <input className="submit" type="submit" value="Create Account" /> */}
                </div>

                <div className="or-container">
                  <div className="left-line" />
                  <span>or</span>
                  <div className="right-line" />
                </div>

                <div className="mt-5" />
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <span className="ml-2 text-dark">Google</span>
                  </div>
                </button>

                <div className="my-5">
                  <p className="text-center">
                    Already have an account?
                    <Link
                      className="btn btn-outline-light ml-2 text-primary"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

Signup.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};
