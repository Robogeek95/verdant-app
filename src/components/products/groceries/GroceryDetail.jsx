import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Col, Row, Card } from "react-bootstrap";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Cursor,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
// import { listProductDetails } from "../../../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LatestProducts from "../../layouts/section/LatestProducts";

import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "../../../actions/cartActions";
import { fetchProduct, postToCart } from "../../../utilities/services";
import { toast, ToastContainer } from "react-toastify";
import formatApiError from "../../../utilities/formatAPIError";
import handleApiError from "../../../utilities/handleApiError";

const GroceryDetail = ({ match, userDetails }) => {
  // let { ref } = match.params.ref;

  console.log({ ref: match.params.ref });
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (match.params.ref) {
      fetchProduct(match.params.ref)
        .then((res) => {
          setLoading(false);
          console.log(res.data);

          setProduct(res.data.product);
        })
        .catch((error) => {
          handleApiError(error);
          let message = formatApiError(error);
          toast(message);
          setError(error.message);
        });
    }
  }, [match.params.ref]);

  function handleAddToCart() {
    // if logged in
    if (userDetails) {
      let payload = {
        product_ref: product.ref,
        quantity: quantity,
        amount: product.amount,
      };

      // add product to cart using api
      postToCart(payload).then(() => {
        // store in global state
        addToCart({ ...product, quantity });
        toast(`${product.name} added to cart`);
      });
      return;
    }

    addToCart({ ...product, quantity });
    toast(`${product.name} added to cart`);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-4">
      <ToastContainer />
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container">
          <Row>
            <Col sm={12} md={12} lg={12} className="py-3">
              <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
                Products
                <ChevronRight /> Groceries <ChevronRight />{" "}
                <span
                  className="text-primary"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  {product?.name}
                </span>
              </h6>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Row className="mb-4">
                    <Col md={6}>
                      <div>
                        <img
                          src={product.image}
                          className="img-fluid"
                          alt="Grocery Item"
                          style={{ height: "500px" }}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <h4
                          className="mt-3"
                          style={{ fontSize: "30px", fontWeight: "500" }}
                        >
                          {product?.name}
                        </h4>
                        {/* <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          Product Code:
                          <strong>12345</strong>
                        </p> */}
                        <hr />
                        <h5
                          className="text-primary"
                          style={{ fontSize: "26px", fontWeight: "500" }}
                        >
                          ₦{product.cost}
                        </h5>
                        <hr />

                        <div className="d-flex justify-content-even">
                          <div className="mr-4">
                            <span
                              style={{ fontSize: "18px", fontWeight: "400" }}
                            >
                              Quantity
                            </span>
                          </div>
                          <div className="inc-wrapper mb-4 flex-fill">
                            <button
                              type="button"
                              className="minus-btn"
                              onClick={() =>
                                setQuantity(quantity <= 1 ? 1 : quantity - 1)
                              }
                            >
                              &#8722;
                            </button>
                            <span className="item-number">{quantity}</span>
                            <button
                              type="button"
                              className="plus-btn"
                              onClick={() => setQuantity(quantity + 1)}
                            >
                              &#43;
                            </button>
                          </div>
                        </div>
                        <div style={{ width: "300px" }}>
                          <button
                            className="btn btn-block btn-primary"
                            style={{ fontSize: "18px", fontWeight: "500" }}
                            onClick={handleAddToCart}
                          >
                            Add To Cart
                          </button>
                        </div>
                        <hr />
                        <div>
                          <p style={{ fontSize: "20px", fontWeight: "400" }}>
                            Share Product
                          </p>
                          <Link to="/">
                            <Facebook size={35} className="mr-2" />
                          </Link>
                          <Link to="/">
                            <Twitter
                              size={35}
                              className="mr-2 bg-primary p-1 rounded-circle text-white"
                            />
                          </Link>
                          <Link to="/" className="">
                            <Linkedin
                              size={35}
                              className="rounded-circle text-primary mr-2"
                            />
                          </Link>
                          <Link to="/" className="">
                            <Cursor
                              size={35}
                              className="rounded-circle text-white bg-dark p-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <h5 style={{ fontSize: "20px", fontWeight: "500" }}>
                        Product Details
                      </h5>
                      <hr />
                      <p
                        className="mb-4"
                        style={{ fontSize: "16px", fontWeight: "400" }}
                      >
                        {product.description}
                      </p>
                      <p style={{ fontSize: "16px", fontWeight: "400" }}>
                        <strong style={{ fontSize: "16px", fontWeight: "700" }}>
                          Serving:{" "}
                        </strong>
                        {product.description}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-5 mb-4">
                <h6 style={{ fontSize: "20px", fontWeight: "500" }}>
                  Other items you might like
                </h6>
              </div>

              <div className="card card-body">
                <LatestProducts />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { cart: state.cart, userDetails: state.userDetails };
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryDetail);

GroceryDetail.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  userDetails: PropTypes.object,
};
