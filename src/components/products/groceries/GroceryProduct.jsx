/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const GroceryProduct = ({ product, addToCart }) => {
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
            <div className="d-flex justify-between">
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
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default GroceryProduct;
