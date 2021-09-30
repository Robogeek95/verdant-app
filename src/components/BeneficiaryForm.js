import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export default function BeneficiaryForm({ data, setData }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }

  return (
    <div>
      <Row className=" py-2">
        <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
              Full name
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              value={data.name}
              required
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3 formControl">
            <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
              Phone Number
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              bg="secondary"
              value={data.phone}
              onChange={handleChange}
              name="phone"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
              Address
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={data.address}
              onChange={handleChange}
              name="address"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
              Country
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Town / City"
              value={data.country}
              onChange={handleChange}
              name="country"
              required
            />
          </Form.Group>
        </Col>
        {/* <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "18px", fontWeight: "400" }}>
              State
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter State"
              //   value={receiversState}
              //   onChange={(e) => setReceiversState(e.target.value)}
              required
            />
          </Form.Group>
        </Col> */}
      </Row>
    </div>
  );
}

BeneficiaryForm.propTypes = {
  setData: PropTypes.object,
  data: PropTypes.func,
};
