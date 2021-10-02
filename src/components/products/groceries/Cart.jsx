import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, TrashFill } from "react-bootstrap-icons";
import Message from "./Message";
import {
  addToCart,
  removeFromCart,
  updateCartItemQty,
  setCart,
} from "../../../actions/cartActions";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import { deleteFromCart, updateCart } from "../../../utilities/services";
import handleApiError from "../../../utilities/handleApiError";
import formatApiError from "../../../utilities/formatAPIError";

const Cart = ({
  match,
  location,
  history,
  cart,
  updateCartItemQty,
  removeFromCart,
  userLogin,
}) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const { cartItems, subTotal, total, deliveryFee } = cart;
  const { userInfo } = userLogin;

  const checkoutHandler = () => {
    // Todo: check userInfo
    // if (!userInfo) {
    //   history.push("/login?redirect=shipping");
    // } else {
    history.push(`/products/checkout?shipping/${productId}/${qty}`);
    // } 
  };

  // update cart item
  function handleIncrementItem(item, type) {
    try {
      let temp_element = {
        ref: item.ref,
        quantity: item.quantity,
        amount: item.amount,
      };

      if (type === "increment") {
        temp_element.quantity = temp_element.quantity + 1;
      } else {
        temp_element.quantity =
          temp_element.quantity > 0 ? temp_element.quantity - 1 : 0;
      }

      // Todo: check userInfo
      if (!userInfo) {
        updateCart(temp_element).then(() => {
          // store in global state
          // toast(`Removed ${item.name} from cart`);
          updateCartItemQty({ ref: item.ref, updatedItem: temp_element });
        });
        return;
      }
      // updateCartItemQty({ ref, type });

      updateCartItemQty({ ref: item.ref, updatedItem: temp_element });
      toast(`Removed ${item.name} from cart`);
    } catch (error) {
      handleApiError(error);
      let message = formatApiError(error);
      toast(message);
    }
  }

  // delete cart item
  function handleRemoveItem(item) {
    // Todo: check userInfo
    if (!userInfo) {
      let payload = {
        product_ref: item.ref,
      };

      // add item to cart using api
      deleteFromCart(payload).then(() => {
        // store in global state
        toast(`Removed ${item.name} from cart`);
        removeFromCart({ ref: item.ref });
      });
      return;
    }

    toast(`Removed ${item.name} from cart`);
    removeFromCart({ ref: item.ref });
  }

  return (
    <div className="py-5 container">
      <ToastContainer />
      <Row className="py-4">
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: "18px", fontWeight: "26.44" }}>
            Shopping Cart
          </h6>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            <Col md={6} className="cart-items-header">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  paddingTop: "15px",
                }}
              >
                Product
              </p>
            </Col>
            <Col md={3} className="cart-items-header">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  paddingTop: "15px",
                }}
              >
                Quantity
              </p>
            </Col>
            <Col md={3} className="cart-items-header">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  paddingTop: "15px",
                }}
              >
                Price
              </p>
            </Col>
          </Row>

          {cartItems.length === 0 ? (
            <Message>
              Your Cart is empty
              <div className="mt-3">
                <Link to="/products/groceries">
                  <h3>Go Shopping</h3>
                </Link>
              </div>
            </Message>
          ) : (
            <div>
              {cartItems.map((item) => (
                <Row className="bg-white py-4" key={item.product}>
                  <Col md={6} className="py-4">
                    <div className="d-flex justify-space-between">
                      <img
                        src={item.image}
                        alt="Cart Item"
                        style={{ height: "300px", width: "300px" }}
                        className="img-fluid"
                      />
                      <div className="ml-4">
                        <p
                          style={{ fontSize: "18px", fontWeight: "500" }}
                          className="pt-5"
                        >
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} as="div" className="my-auto">
                    <div>
                      <div className="inc-wrapper mb-4 flex-fill">
                        {/* <button className="minus-btn" onClick={() => dispatch(addToCart(item.product, item.qty > 1 ? item.qty-- : 1))}>&#8722;</button> */}
                        <button
                          className="minus-btn"
                          onClick={() =>
                            handleIncrementItem(item.ref, "decrement")
                          }
                        >
                          &#8722;
                        </button>
                        <span className="item-number">{item.quantity}</span>
                        <button
                          className="plus-btn"
                          type="button"
                          onClick={() =>
                            handleIncrementItem(item.ref, "increment")
                          }
                        >
                          &#43;
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} as="div" className="my-auto">
                    <div>
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        ₦{item.cost}
                      </p>
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        ₦{item.cost * item.quantity}
                      </p>
                    </div>
                  </Col>

                  <Row className="bg-white pb-3 ml-3">
                    <Col md={12}>
                      <Heart className="mr-2 text-warning" size={20} />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.14px",
                          marginRight: "15px",
                          color: "#F6C54C",
                          cursor: "pointer",
                        }}
                      >
                        MOVE TO SAVED ITEMS
                      </span>
                      <Button
                        onClick={() => handleRemoveItem(item)}
                        type="button"
                        variant="light"
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "16.14px",
                            color: "#F6C54C",
                            cursor: "pointer",
                          }}
                        >
                          <TrashFill className="mr-2 text-warning" size={20} />
                          REMOVE
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Row>
              ))}
            </div>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header className="d-flex card-header justify-content-between bg-white pt-3">
              <h5
                className="text-dark"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "26.9px",
                }}
              >
                YOUR ORDER
              </h5>
              <h6
                className="text-dark"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "26.9px",
                }}
              >
                {cartItems.length} Item{cartItems.length > 1 && "s"}
              </h6>
            </Card.Header>

            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Text
                  className="text-dark"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "24.21px",
                  }}
                >
                  Sub-total
                </Card.Text>
                <Card.Subtitle
                  className="text-dark"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "24.21px",
                  }}
                >
                  ₦{subTotal}
                </Card.Subtitle>
              </div>

              <div className="d-flex justify-content-between">
                <Card.Text
                  className="text-dark"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "24.21px",
                  }}
                >
                  Delivery Fee
                </Card.Text>
                <Card.Subtitle
                  className="text-dark"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "24.21px",
                  }}
                >
                  ₦{deliveryFee}
                </Card.Subtitle>
              </div>

              <div className="d-flex justify-content-between">
                <Card.Title
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "24.21px",
                  }}
                >
                  TOTAL
                </Card.Title>
                <Card.Subtitle
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "24.21px",
                  }}
                >
                  ₦{total}
                </Card.Subtitle>
              </div>
              <Form>
                <Row className="mt-4">
                  <Col md={12}>
                    <div className="mx-auto" style={{ width: "257px" }}>
                      <button
                        className="btn btn-primary btn-block"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return { cart: state.cart, userLogin: state.userLogin };
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  updateCartItemQty,
  setCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  match: PropTypes.element,
  location: PropTypes.object,
  history: PropTypes.object,
  cart: PropTypes.object,
  updateCartItemQty: PropTypes.func,
  removeFromCart: PropTypes.func,
  setCart: PropTypes.func,
  userLogin: PropTypes.object,
};
