import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addBeneficiary } from "../actions/beneficiaryActions";
import BeneficiaryForm from "./BeneficiaryForm";
import Loader from "./products/groceries/Loader";

export default function CreateBeneficiary() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [beneficiaryData, setBeneficiaryData] = useState({
    name: "",
    phone: "",
    address: "",
    country: "",
  });

  const beneficiariesData = useSelector((state) => state.beneficiaries);

  const { adding: addingBeneficiary, addError: addBeneficiaryError } =
    beneficiariesData;

  function handleCreateBeneficiary() {
    dispatch(addBeneficiary(beneficiaryData));
    handleClose();
  }

  useEffect(() => {
    if (addBeneficiaryError) {
      toast(addBeneficiaryError);
    }
  }, [addBeneficiaryError]);

  return (
    <div>
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col col-5">
          <button
            className="btn btn-primary btn-block"
            style={{
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "26.44px",
            }}
            onClick={handleShow}
          >
            Create new Beneficiary
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Beneficiary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {addingBeneficiary ? (
            <Loader />
          ) : (
            <BeneficiaryForm
              data={beneficiaryData}
              setData={setBeneficiaryData}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleCreateBeneficiary} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
