import React from "react";
import PropTypes from "prop-types";
import { deleteBeneficiary } from "../actions/beneficiaryActions";
import { useDispatch } from "react-redux";

export default function BeneficiaryCard({ data }) {
  const { name, phone, address, country } = data;

  const dispatch = useDispatch();

  function handleDeleteBeneficiary(beneficiary) {
    dispatch(deleteBeneficiary(beneficiary.ref));
  }

  return (
    <div className="card">
      <div className="card-body bg-muted">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h5 className="m-0">{name}</h5>

          <button
            className="btn btn-danger"
            onClick={() => handleDeleteBeneficiary(data)}
          >
            Delete
          </button>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-5">
                <p>Phone</p>
              </div>
              <div className="col-7">
                <strong>{phone}</strong>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-5">
                <p>Address</p>
              </div>
              <div className="col-7">
                <strong>{address}</strong>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-5">
                <p>Country</p>
              </div>
              <div className="col-7">
                <strong>{country}</strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

BeneficiaryCard.propTypes = {
  data: PropTypes.object,
};
