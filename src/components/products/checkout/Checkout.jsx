import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Form } from "react-bootstrap";
import BeneficiaryForm from "../../BeneficiaryForm";
import {
  addBeneficiary,
  getBeneficiaries,
} from "../../../actions/beneficiaryActions";
import Loader from "../../products/groceries/Loader";
import { toast, ToastContainer } from "react-toastify";
import BeneficiaryCard from "../../BeneficiaryCard";
import { checkoutCart } from "../../../utilities/services";
import handleApiError from "../../../utilities/handleApiError";
import formatApiError from "../../../utilities/formatAPIError";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, subTotal, total, deliveryFee } = cart;
  const [, setDeliveryMethod] = useState("");

  const [beneficiaryData, setBeneficiaryData] = useState({
    name: "",
    phone: "",
    address: "",
    country: "",
  });
  const [selectedBeneficiary, setSelectedBeneficiary] = useState({});

  const dispatch = useDispatch();

  const beneficiariesData = useSelector((state) => state.beneficiaries);
  const {
    loading: loadingBeneficiaries,
    adding: addingBeneficiary,
    error: loadBeneficiariesError,
    addError: addBeneficiaryError,
    beneficiaries,
  } = beneficiariesData;

  console.log({ beneficiaries });
  useEffect(() => {
    dispatch(getBeneficiaries());
  }, []);

  useEffect(() => {
    if (addBeneficiaryError) {
      toast(addBeneficiaryError);
    }
  }, [addBeneficiaryError]);

  function handleCreateBeneficiary() {
    dispatch(addBeneficiary(beneficiaryData));
  }

  function renderCreateBeneficiary() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col col-4">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "26.44px",
              }}
              data-toggle="modal"
              data-target="#beneficiaryModal"
            >
              Create a Beneficiary
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="beneficiaryModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="beneficiaryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Beneficiary
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {addingBeneficiary ? (
                  <Loader />
                ) : (
                  <BeneficiaryForm
                    data={beneficiaryData}
                    setData={setBeneficiaryData}
                  />
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  cancel
                </button>
                <button
                  onClick={handleCreateBeneficiary}
                  type="button"
                  className="btn btn-primary"
                >
                  Add Beneficiary
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderBeneficiaries() {
    if (loadingBeneficiaries) {
      return (
        <div className="d-flex m-5 justify-content-center align-items-center">
          <Loader />
        </div>
      );
    }

    if (loadBeneficiariesError) {
      return (
        <div className="bg-danger text-white d-flex m-5 justify-content-center align-items-center">
          <p>{loadBeneficiariesError}</p>
        </div>
      );
    }

    return (
      <>
        {beneficiaries.length <= 0 ? (
          <>
            <div className="my-5">
              <h4 className="text-center">You have no beneficiaries yet!</h4>

              <div className="mt-3">{renderCreateBeneficiary()}</div>
            </div>
          </>
        ) : (
          <div className="">
            <div className="row">
              {beneficiaries.map((beneficiary) => (
                <div
                  key={beneficiary.ref}
                  className="col-4 mb-4"
                  onClick={() => setSelectedBeneficiary(beneficiary)}
                  onKeyPress={() => null}
                  role="treeitem"
                >
                  <BeneficiaryCard
                    data={beneficiary}
                    selected={selectedBeneficiary}
                  />
                </div>
              ))}
            </div>

            {renderCreateBeneficiary()}
          </div>
        )}
      </>
    );
  }

  function handleCheckout() {
    if (selectedBeneficiary.ref) {
      checkoutCart(selectedBeneficiary.ref)
        .then((res) => {
          let data = res.data;
          window.location.replace(data?.payment_link);
        })
        .catch((error) => {
          handleApiError(error);
          let message = formatApiError(error);
          toast(message);
        });
      return;
    }
    toast("please select a beneficiary");
  }

  return (
    <section className="container py-5">
      <ToastContainer />
      <Row className="py-3">
        <Col sm={12} md={12} lg={12}>
          <h5 style={{ fontSize: "18px", fontWeight: "500" }}>CHECKOUT</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={8}>
          {/* step 1 */}
          <Card className="p-3">
            <div>
              <h5
                className="card-header bg-white px-0"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Step 1: Choose Beneficiary
              </h5>
              <div className="m-4">{renderBeneficiaries()}</div>
            </div>

            <div className="mt-4">
              {/* step 2 */}
              <h5
                className="card-header bg-white px-0"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Step 2: Choose Delivery Method
              </h5>
              <div>
                <Row>
                  <Col sm={12} className="mt-5">
                    <div>
                      {/* <Form.Group className="mb-3 formControl" controlId="formBasicEmail"> */}
                      <Form.Check
                        type="radio"
                        value="door delivery"
                        name="deliveryMethod"
                        label="Door Delivery"
                        id="doorDelivery"
                        checked
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                      />
                      {/* <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}><span style={{ fontSize: '18px', fontWeight: '400' }}>Door Delivery</span></Form.Label> */}
                      {/* </Form.Group> */}
                      {/* <h6 className="pt-3">
                      <Record2 size={23} className="text-primary" />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Door Delivery</span>
                    </h6> */}
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          color: "#181818",
                          lineHeight: "21.52px",
                          marginLeft: "3.5px",
                        }}
                      >
                        Delivered between Monday 13 Sep and Wednesday 15 Sep for
                        ₦ 1,000
                      </p>
                    </div>
                    <div>
                      {/* <Form.Group className="mb-3 formControl" controlId="formBasicEmail"> */}
                      <Form.Check
                        type="radio"
                        value="pickup"
                        name="deliveryMethod"
                        label="Pick Up"
                        id="pickup"
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                      />
                      {/* </Form.Group> */}
                      {/* <h6 className="pt-3">
                      <Record2 size={23} />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Pickup Centre</span>
                    </h6> */}
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#181818",
                          lineHeight: "21.52px",
                          marginLeft: "3.5px",
                        }}
                      >
                        Ready for pickup between Wednesday 8 Sep to Thursday 9
                        Sep with cheaper shipping fees
                      </p>
                    </div>
                    <h6
                      className="text-warning"
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#F6C54C",
                        lineHeight: "21.52px",
                      }}
                    >
                      SELECT MERCHENT CENTRE
                    </h6>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col sm={12} md={4} lg={4} className="mx-auto">
                    <button
                      onClick={handleCheckout}
                      className="btn btn-primary btn-block"
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        lineHeight: "26.44px",
                      }}
                    >
                      Pay Now
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
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
              {/* <Form>
                <Row className="mt-4">
                  <Col md={12}>
                    <div className="mx-auto" style={{ width: "257px" }}>
                      <button
                        className="btn btn-primary btn-block"
                        disabled={cartItems.length === 0}
                        // onClick={checkoutHandler}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Checkout;
