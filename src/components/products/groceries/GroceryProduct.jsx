/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { addToCart } from "../../../actions/cartActions";
import { connect } from "react-redux";
import { postToCart } from "../../../utilities/services";
import { toast } from "react-toastify";

const GroceryProduct = ({ product, addToCart, userInfo }) => {
  function handleAddToCart() {
    // if logged in
    if (userInfo) {
      let payload = {
        product_ref: product.ref,
        quantity: 1,
        amount: product.amount,
      };

      // add product to cart using api
      postToCart(payload).then(() => {
        // store in global state
        addToCart(product);
        toast(`${product.name} added to cart`);
      });
      return;
    }

    addToCart(product);
    toast(`${product.name} added to cart`);
  }

  return (
    <>
      <Card className="bg-white" style={{ borderRadius: "3px" }}>
        <div className="py-3 px-3 bg-white">
          <Link
            to={`/products/groceries/${product.ref}`}
            className="text-decoration-none"
          >
            <div
              className="d-flex justify-content-center mx-auto"
              style={{ width: "240px", height: "240px" }}
            >
              <img
                src={product.image}
                className="img-fluid"
                alt="Grocery Item"
              />
            </div>
          </Link>
          <div className="card-body">
            <div div className="d-flex justify-between">
              <p
                className="card-title text-dark"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                {product.name}
              </p>
              <span className="ml-auto">
                <Heart
                  size={25}
                  className="text-warning"
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
            <div className="card-text text-dark">
              <h5 style={{ fontSize: "18px", fontWeight: "500" }}>
                ₦{product.cost}
              </h5>
            </div>
            <button
              type="button"
              className="btn btn-block btn-outline-primary"
              style={{ fontSize: "14px", fontWeight: "500" }}
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

const mapDispatchToProps = {
  addToCart,
};

function mapStateToProps(state) {
  return { userLogin: state.userLogin };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryProduct);

GroceryProduct.propTypes = {
  addToCart: PropTypes.function,
  product: PropTypes.object,
  userLogin: PropTypes.object,
};
