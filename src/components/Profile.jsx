/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { Heart, Cart, FileEarmarkXFill } from "react-bootstrap-icons";
import userIcon from "./images/user-icon.png";
import Message from "./products/groceries/Message";
import Loader from "./products/groceries/Loader";
// import { userUpdateProfile } from '../actions/userActions'
import { getUserDetails, updateUserP } from "../actions/userActions";
import { toast, ToastContainer } from "react-toastify";
// import { userUpdateProfile } from '../actions/userActions'
// import { userUpdateProfile } from '../actions/userActions'

const Profile = ({ history, location }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;
  // console.log(user)

  // Check if the user is logged in. If so bring in the user info
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // console.log(userInfo)

  const updateUser = useSelector((state) => state.updateUser);
  const {
    loading: updating,
    error: updatingError,
    success: updated,
  } = updateUser;
  // console.log(success)

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, history, userInfo]);

  useEffect(() => {
    if (userInfo) {
      const user = userInfo.user;
      const firstName = user.name?.spassword1234
      setEmail(user.email);
      setPhone(user.phone?.toString());
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast("Password do not match");
    } else {
      // UPDATE PROFILE
      let payload = {
        name: firstName + lastName,
        email,
        phone,
      };

      if (password) {
        payload.password = password;
      }

      dispatch(updateUserP(payload));
    }
  };

  useEffect(() => {
    if (updated) {
      toast("profile successfully updated");
    }
  }, [updated]);

  useEffect(() => {
    if (updatingError) {
      toast(updatingError);
    }
  }, [updatingError]);

  return (
    <div className="container">
      <ToastContainer />
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6
            style={{
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "35.25px",
            }}
          >
            Account Details
          </h6>
        </Col>
      </Row>

      <Row>
        <Col md={3} lg={4}>
          <div
            style={{
              backgroundColor: "#F9F9F9",
              padding: "40px 0",
              borderRadius: "5px",
              boxShadow: "0px 4px 28px rgba(55, 133, 247, 0.03)",
              height: "100%",
            }}
          >
            <ul>
              <Link to="/profile" className="text-decoration-none text-dark">
                <li
                  className="bg-white d-flex align-items-center justify-items-center py-3 px-3"
                  style={{ borderLeft: "3px solid #F6C54C" }}
                >
                  <img
                    src={userIcon}
                    alt="User Icon"
                    style={{
                      width: "14.09px",
                      height: "21px",
                      marginRight: "15px",
                    }}
                  />
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "29.38px",
                    }}
                  >
                    Profile Details
                  </p>
                </li>
              </Link>
              <Link to="/orders" className="text-decoration-none text-dark">
                <li className="d-flex align-items-center justify-items-center py-3 px-3">
                  <Cart size={20} style={{ marginRight: "15px" }} />
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "29.38px",
                    }}
                  >
                    My Orders
                  </p>
                </li>
              </Link>
              <Link
                to="/saved-items"
                className="text-decoration-none text-dark"
              >
                <li className="d-flex align-items-center justify-items-center py-3 px-3">
                  <Heart size={20} style={{ marginRight: "15px" }} />
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "29.38px",
                    }}
                  >
                    Saved Items
                  </p>
                </li>
              </Link>
              <ul style={{ marginLeft: "80px", listStyle: "none" }}>
                <li
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "26.44px",
                  }}
                >
                  Products
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "26.44px",
                  }}
                >
                  Invoices
                </li>
              </ul>
            </ul>
          </div>
        </Col>

        <Col md={9} lg={8}>
          <Card>
            <Card.Body style={{ minHeight: "450px" }}>
              {loading || updating ? (
                <div className="mt-5">
                  <Loader />
                </div>
              ) : (
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                          type="text"
                          id="first-name"
                          placeholder="first Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          type="text"
                          id="last-name"
                          placeholder="last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="new-password">New password</label>
                        <input
                          type="password"
                          id="new-password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="confirm-password">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          placeholder="confirm password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <input
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                      value="Save Changes"
                    />
                  </div>
                </form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
