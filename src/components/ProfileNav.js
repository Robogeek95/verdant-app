import React from "react";
import { Link } from "react-router-dom";
import {
  // Heart,
  // HeartFill,
  CartFill,
  Cart,
  People,
  PeopleFill,
} from "react-bootstrap-icons";
import userNoFillIcon from "./images/user-nofill-icom.png";
import PropTypes from "prop-types";
import userIcon from "./images/user-icon.png";

export default function ProfileNav({ active }) {
  let activeStyle = { borderLeft: "3px solid #F6C54C" };
  return (
    <div>
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
              style={active === "profile" ? activeStyle : null}
            >
              {active === "profile" ? (
                <img
                  src={userIcon}
                  alt="User Icon"
                  style={{
                    width: "14.09px",
                    height: "21px",
                    marginRight: "15px",
                  }}
                />
              ) : (
                <img
                  src={userNoFillIcon}
                  alt="User Icon"
                  style={{
                    width: "14.09px",
                    height: "21px",
                    marginRight: "15px",
                  }}
                />
              )}
              <p
                className="mb-0"
                style={{
                  fontSize: "20px",
                  lineHeight: "29.38px",
                  fontWeight: active === "profile" ? "500" : "400",
                }}
              >
                Profile Details
              </p>
            </li>
          </Link>

          <Link to="/orders" className="text-decoration-none text-dark">
            <li
              className="bg-white d-flex align-items-center justify-items-center py-3 px-3"
              style={active === "orders" ? activeStyle : null}
            >
              {active === "orders" ? (
                <CartFill size={20} style={{ marginRight: "15px" }} />
              ) : (
                <Cart size={20} style={{ marginRight: "15px" }} />
              )}
              <p
                className="mb-0"
                style={{
                  fontSize: "20px",
                  fontWeight: active === "orders" ? "500" : "400",
                  lineHeight: "29.38px",
                }}
              >
                My Orders
              </p>
            </li>
          </Link>

          <Link to="/beneficiaries" className="text-decoration-none text-dark">
            <li
              className="bg-white d-flex align-items-center justify-items-center py-3 px-3"
              style={active === "beneficiaries" ? activeStyle : null}
            >
              {active === "beneficiaries" ? (
                <PeopleFill size={20} style={{ marginRight: "15px" }} />
              ) : (
                <People size={20} style={{ marginRight: "15px" }} />
              )}
              <p
                className="mb-0"
                style={{
                  fontSize: "20px",
                  fontWeight: active === "beneficiaries" ? "500" : "400",
                  lineHeight: "29.38px",
                }}
              >
                Beneficiaries
              </p>
            </li>
          </Link>

          {/* <Link to="/saved-items" className="text-decoration-none text-dark">
            <li
              className="bg-white d-flex align-items-center justify-items-center py-3 px-3"
              style={active === "saved" ? activeStyle : null}
            >
              {active === "saved" ? (
                <HeartFill size={20} style={{ marginRight: "15px" }} />
              ) : (
                <Heart size={20} style={{ marginRight: "15px" }} />
              )}
              <p
                className="mb-0"
                style={{
                  fontSize: "20px",
                  fontWeight: active === "saved" ? "500" : "400",
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
         */}
        </ul>
      </div>
    </div>
  );
}

ProfileNav.propTypes = {
  active: PropTypes.string,
};
