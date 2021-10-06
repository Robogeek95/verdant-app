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
import ProfileNav from "./ProfileNav";
import CreateBeneficiary from "./CreateBeneficiary";
import BeneficiaryCard from "./BeneficiaryCard";
import { getBeneficiaries } from "../actions/beneficiaryActions";
// import { userUpdateProfile } from '../actions/userActions'
// import { userUpdateProfile } from '../actions/userActions'

const Beneficiaries = ({ history, location }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, history, userInfo]);

  const beneficiariesData = useSelector((state) => state.beneficiaries);
  const {
    loading: loadingBeneficiaries,
    error: loadBeneficiariesError,
    addError: addBeneficiaryError,
    added: beneficiaryAdded,
    beneficiaries,
  } = beneficiariesData;

  useEffect(() => {
    dispatch(getBeneficiaries());
  }, []);

  useEffect(() => {
    if (loadBeneficiariesError) {
      toast(loadBeneficiariesError);
    }
  }, [loadBeneficiariesError]);

  useEffect(() => {
    if (addBeneficiaryError) {
      toast(addBeneficiaryError);
    }
  }, [addBeneficiaryError]);

  function renderBeneficiaries() {
    if (loadingBeneficiaries) {
      return (
        <div className="d-flex m-5 justify-content-center align-items-center">
          <Loader />
        </div>
      );
    }

    return (
      <>
        {beneficiaries.length <= 0 ? (
          <>
            <div className="my-5">
              <h4 className="text-center">You have no beneficiaries yet!</h4>

              <div className=" row mt-3 justify-content-center">
                <div className="col-7">
                  <CreateBeneficiary />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="">
            <div className="row">
              {beneficiaries.map((beneficiary) => (
                <div
                  key={beneficiary.ref}
                  className="col-4 mb-4"
                  onKeyPress={() => null}
                  role="treeitem"
                >
                  <BeneficiaryCard data={beneficiary} />
                </div>
              ))}
            </div>

            <CreateBeneficiary />
          </div>
        )}
      </>
    );
  }

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
          <ProfileNav active="beneficiaries" />
        </Col>

        <Col md={9} lg={8}>
          <Card>
            <Card.Header className="bg-white">
              <p
                className="mb-0"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "26.44px",
                }}
              >
                Your beneficiaries ({beneficiaries?.length || 0})
              </p>
            </Card.Header>

            <Card.Body style={{ minHeight: "450px" }}>
              {loadingBeneficiaries ? (
                <div className="mt-5">
                  <Loader />
                </div>
              ) : (
                renderBeneficiaries()
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Beneficiaries;
