import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftShort, EmojiFrown } from "react-bootstrap-icons";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-7 text-center mt-5">
          <div className="mb-4">
            <EmojiFrown size="5rem" color="#F6C54C" />
          </div>
          <h1>OOops!</h1>

          <p>This page does not exist....</p>
          <Link
            to="/products/groceries"
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <ArrowLeftShort size="2rem" color="#F6C54C" />
            </div>
            Back to Products page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
