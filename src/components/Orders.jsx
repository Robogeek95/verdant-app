import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import noOrders from "./images/no-orders.png";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./products/groceries/Loader";
import { listOrders } from "../actions/orderActions";
import { toast } from "react-toastify";
import ProfileNav from "./ProfileNav";
import { Link } from "react-router-dom";

const Orders = () => {
  const invoices = useSelector((state) => state.orders);
  const { loading: loadingOrders, orders, error: loadOrdersError } = invoices;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
  }, []);

  useEffect(() => {
    if (loadOrdersError) {
      toast(loadOrdersError);
    }
  }, [loadOrdersError]);

  return (
    <div className="container">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "26.44px",
            }}
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
          <ProfileNav active="orders" />
        </Col>

        <Col md={9} lg={8} className="mb-5">
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
                Your Orders ({orders?.length || 0})
              </p>
            </Card.Header>
            <Card.Body style={{ minHeight: "450px" }}>
              {loadingOrders ? (
                <div className="mx-auto mt-5">
                  <Loader />
                </div>
              ) : (
                <Row>
                  {orders.length > 0 ? (
                    <div className="col-12">
                      <div className="row">
                        {orders.map((order) => {
                          return (
                            <div key={order.id} className="col-4">
                              <h6>{order.name}</h6>
                              <h6>{order.quantity}</h6>
                              <h6>{order.amount}</h6>
                              <h6>{order.beneficary?.name}</h6>
                              <h6>{order.beneficary?.phone}</h6>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
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
                        <Link
                          to="/products/groceries"
                          className="btn btn-primary btn-block"
                        >
                          Continue Shopping
                        </Link>
                      </div>
                    </Col>
                  )}
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
