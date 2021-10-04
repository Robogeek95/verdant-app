import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { ChevronRight, Heart, CartFill } from "react-bootstrap-icons";
import userNoFillIcon from "./images/user-nofill-icom.png";
import noOrders from "./images/no-orders.png";

const Orders = () => (
  <div className="container">
    <Row>
      <Col sm={12} md={12} lg={12} className="py-3">
        <h6
          style={{ fontSize: "18px", fontWeight: "400", lineHeight: "26.44px" }}
        >
          Home
          <ChevronRight />{" "}
          <span
            className="text-primary"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "26.44px",
            }}
          >
            My Orders
          </span>
        </h6>
      </Col>
    </Row>

    <Row>
      <Col sm={12} md={12} lg={12} className="py-1">
        <h6
          style={{ fontSize: "24px", fontWeight: "500", lineHeight: "35.25px" }}
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
              <li className="d-flex align-items-center justify-items-center py-3 px-3">
                <img
                  src={userNoFillIcon}
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
                    fontWeight: "400",
                    lineHeight: "29.38px",
                  }}
                >
                  Profile Details
                </p>
              </li>
            </Link>
            <Link to="/orders" className="text-decoration-none text-dark">
              <li
                className="bg-white d-flex align-items-center justify-items-center py-3 px-3"
                style={{ borderLeft: "3px solid #F6C54C" }}
              >
                <CartFill size={20} style={{ marginRight: "15px" }} />
                <p
                  className="mb-0"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "29.38px",
                  }}
                >
                  My Orders
                </p>
              </li>
            </Link>
            <Link to="/saved-items" className="text-decoration-none text-dark">
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
          <Card.Body>
            <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "50px 0",
                }}
              >
                <div>
                  <img
                    src={noOrders}
                    alt="No Order Icon"
                    style={{ width: "250px" }}
                  />
                </div>
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeigt: "500",
                    lineHeight: "26.9px",
                  }}
                >
                  No orders yet!!
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeigt: "400",
                    lineHeight: "21.52px",
                  }}
                >
                  You have not placed an order recently
                </p>
                <div style={{ width: "30%", textAlign: "center" }}>
                  <input
                    className="btn btn-primary btn-block"
                    type="submit"
                    value="Continue Shopping"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Orders;
