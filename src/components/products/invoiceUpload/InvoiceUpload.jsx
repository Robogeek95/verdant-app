import React, { useEffect, useState } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import Banner from "../../images/bill-image/invoicUpload-banner.png";
import { useFilePicker } from "use-file-picker";
import Loader from "../groceries/Loader";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice } from "../../../actions/invoiceActions";

const InvoiceUpload = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const [
    openFileSelector,
    { filesContent: imageContent, plainFiles: imageFile, clear },
  ] = useFilePicker({
    accept: "image/*",
    readAs: "DataURL",
  });

  const invoices = useSelector((state) => state.invoices);
  const {
    adding: addingInvoice,
    addError: addInvoiceError,
    added: addedInvoice,
  } = invoices;

  function handleUpload() {
    if (amount > 0) {
      if (imageFile[0]) {
        let image_as_file = imageFile[0];
        let formData = new FormData();
        formData.append("image", image_as_file);
        formData.append("amount", amount);

        dispatch(addInvoice(formData));
        return;
      }
      toast("please select an invoice image to upload");
      return;
    }
    toast("please enter an amount");
    return;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "amount":
        setAmount(value);
        break;
    }
  }

  useEffect(() => {
    if (addInvoiceError) {
      toast(addInvoiceError);
    }
    clear();
  }, [addInvoiceError]);

  useEffect(() => {
    if (addedInvoice) {
      toast("Invoice was successfully uploaded");
    }
    clear();
  }, [addedInvoice]);

  return (
    <div className="container py-4">
      <ToastContainer />
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: "18px", fontWeight: "400" }}>
            Home
            <ChevronRight />{" "}
            <span
              className="text-primary"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Invoice Upload
            </span>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="banner-image">
            <Image src={Banner} className="img-fluid" alt="Invoice Banner" />
          </div>
        </Col>
      </Row>
      <section className="py-5 px-4 my-5 bg-white">
        <Row className="py-2">
          <Col sm={12} md={12} lg={12}>
            <h6 style={{ fontSize: "14px", fontWeight: "400" }}>
              Required Fields
              <span className="text-danger">*</span>
            </h6>
            <h5 style={{ fontSize: "24px", fontWeight: "500" }}>
              Step 1: Enter invoice details
              <span className="text-danger">*</span>
            </h5>
          </Col>
        </Row>
        <Form>
          <Row className="mx-auto py-2">
            <Col sm={12} md={4} lg={4}>
              <div className="input-group">
                <label className="sr-only" htmlFor="exampleInputAmount">
                  Amount (in Naira)
                </label>
                <div className="input-group-prepend">
                  <span className="input-group-text">₦</span>
                </div>
                <input
                  type="number"
                  min="0.00"
                  step="0.05"
                  value={amount}
                  onChange={handleChange}
                  id="amount"
                  name="amount"
                  className="form-control"
                  placeholder="Amount"
                />
              </div>
            </Col>
          </Row>
        </Form>
        <hr />
        <Row className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <div className="row">
              <h5
                className="pt-2"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Step 2: Select Invoice
              </h5>
            </div>

            <div className="row p-5">
              <div className="col col-12" style={{ minHeight: 386 }}>
                <div
                  className="w-100 h-100 p-5 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    border: "2px dashed #BED8FF",
                    ":hover": { backgroundColor: "red" },
                  }}
                  onClick={() => openFileSelector()}
                  onKeyPress={() => null}
                  role="form"
                >
                  {addingInvoice ? (
                    <div>
                      <Loader />
                      <h4 className="text-center text-info mt-3">
                        Uploading Invoice...
                      </h4>
                    </div>
                  ) : (
                    <>
                      <Image src="/images/select.png" />
                      <p className="text-center mt-4">
                        Click to drop invoice or Browse
                      </p>
                      {imageContent.map((file, index) => (
                        <div
                          key={index}
                          className="d-flex flex-column justify-content-center align-items-center"
                        >
                          <h4>{file.name}</h4>
                          <Image
                            alt={file.name}
                            src={file.content}
                            width="300"
                            height="300"
                            className="img-fluid mx-auto"
                          ></Image>

                          <br />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={6} md={4} lg={3} className="" onClick={handleUpload}>
            <button className="btn btn-primary btn-block">Send</button>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default InvoiceUpload;
