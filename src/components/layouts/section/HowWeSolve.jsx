import React from "react";
import { Row, Col } from "react-bootstrap";

const HowWeSolve = () => (
  <>
    <div className="mx-auto mb-3 container">
      <h5 className="ourProduct text-center h2 font-weight-400">
        How We Solve The Problem
      </h5>
      <h5 className="text-center font-weight-normal text-capitalize">
        And{" "}
        <span style={{ color: "#3785f7" }} className="">
          Eliminate
        </span>{" "}
        Remittance
      </h5>

      <hr
        style={{
          borderWidth: "7px",
          maxWidth: "390px",
          borderColor: "#3446aa3d",
          // borderColor: "linear-gradient(to left, #71B280, #134E5E)",
        }}
        className="mx-auto"
      />

      <p className="product-text mb-5 h5 font-weight-normal mt-4">
        By providing the ability for traditional remittance senders to directly
        pay all bills and facilitate payment of common local products and
        services on behalf of the receiver, BL Digital can eliminate the need
        for cash remittance entirely.
      </p>
    </div>

    <div className="p-3 p-md-5 text-white" style={{ backgroundColor: "#3785f7" }}>
      <Row className="container mx-auto">
        <Col sm={12} md={6} lg={6}>
          <div>
            <ul>
              <li className="product-text text-white">
                <span className="text-danger">*</span> Through exclusive
                partnerships
              </li>
              <li className="product-text text-white">
                <span className="text-danger">*</span> Deep technology
                integration
              </li>
              <li className="product-text text-white">
                <span className="text-danger">*</span> Easy cash load into the
                BL Digital Platform
              </li>
              <li className="product-text text-white">
                <span className="text-danger">*</span> Invoice Settlement
                (School fees, house rents, hospital bills)
              </li>
            </ul>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6} className="mx-auto">
          <p>
            BL Digital has built an advanced merchant aggregation and
            orchestration platform that connects our comprehensive local
            merchant catalog to our customers. This catalog represents 95% of
            the cash spending of traditional remittance recipients.
          </p>
        </Col>
      </Row>
    </div>

    <div className="row pt-5 container mx-auto align-items-center">
      <div className="col-12 col-md-6">
        <div className="row">
          <div className="col-4">
            <img src="./images/convenant uni.jpeg" className="img-fluid" />
          </div>

          <div className="col-4">
            <img src="./images/Indomie.png" className="img-fluid" />
          </div>

          <div className="col-4">
            <img src="./images/healthplus.png" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-4 mt-md-0">
        <p className="h5 font-weight-normal">
          Our local prepaid Visa & Mastercard product distribution agreement
          will allow discretionary spending options for the remaining 5%.
        </p>
      </div>
    </div>
  </>
);

export default HowWeSolve;
