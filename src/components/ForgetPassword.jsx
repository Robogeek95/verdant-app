/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import Logo from "./images/logo.PNG";
// import loginBarner from "./images/login-barner.png";
import Forgetlogo from "./images/forgetlogo.png";
import Message from "./products/groceries/Message";
import Loader from "./products/groceries/Loader";
import { login } from "../actions/userActions";

const ForgetPassword = ({ location, history }) => {
  const [email, setEmail] = useState("");
  

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
    dispatch(login(email));
  };

  return (
    <div className="d-flex justify-content-center" >
      <div className="row">
        <div className="col">
          <div className=" p-5 ">
            <div className="d-flex  justify-content-center">
              <div>
                <img src={Forgetlogo} alt="Brand Logo" />
              </div>
             
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
              Enter the email associated with your account
and we’ll send an email with instructions to
reset your password.
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
              
             
              <div className="mb-5">
                <input
                  className="btn btn-primary btn-block btn-lg"
                  type="submit"
                  value="Send"
                />
                {/* <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button> */}
              </div>

             
            </form>

            <div className="mt-5" />
            <div className="mt-5" />

          

            <p className="no-account text-center">
              Remember Password?
              {/* <LinkContainer to={redirect ? `/register?redirect=${redirect}` : "/signup"}>  */}
              <LinkContainer to="/login">
                <a>Login</a>
              </LinkContainer>
              {/* <a href="#">Create an account</a> */}
            </p>
          </div>
        </div>

        {/* <div className="col">
          <div>
            <img src={loginBarner} alt="Login Barner" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ForgetPassword;
