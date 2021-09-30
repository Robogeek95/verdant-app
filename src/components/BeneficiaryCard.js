import React from "react";
import PropTypes from "prop-types";
import { deleteBeneficiary } from "../actions/beneficiaryActions";
import { useDispatch } from "react-redux";

export default function BeneficiaryCard({ data, selected }) {
  const { name, phone, address, country } = data;

  const dispatch = useDispatch();

  function handleDeleteBeneficiary(beneficiary) {
    dispatch(deleteBeneficiary(beneficiary.ref));
  }

  return (
    <div className="card cursor-pointer">
      <div
        className={`card-body bg-light border py-3 rounded ${
          selected?.ref === data?.ref && "border-info"
        }`}
      >
        <div className="mb-1 d-flex justify-content-between align-items-center">
          <h5 className="m-0">{name}</h5>
        </div>
        <ul className="list-group list-group-flush bg-transparent">
          <li className="list-group-item m-0 p-2 bg-transparent">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-12">
                <strong>{phone}</strong>
              </div>
            </div>
          </li>
          <li className="list-group-item m-0 p-2 bg-transparent">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-12">
                <strong>{address}</strong>
              </div>
            </div>
          </li>
          <li className="list-group-item m-0 p-2 bg-transparent">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">Country</p>
              </div>
              <div className="col-12">
                <strong>{country}</strong>
              </div>
            </div>
          </li>
        </ul>
        <button
          className="mt-3 w-100 btn btn-danger"
          onClick={() => handleDeleteBeneficiary(data)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

BeneficiaryCard.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.object,
};
