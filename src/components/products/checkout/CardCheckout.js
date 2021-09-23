import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

const CardCheckout = () => {
  return (
    <>
        <Row className="mt-4">
          <Col sm={12} md={12} lg={12}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Card Number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter Card Number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Expiry Date <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>CVC <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="CVC" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Country <span className="text-danger">*</span></Form.Label>
                <select class="form-control" name="" id="">
                  <option selected>Nigeria</option>
                  <option value="1">USA</option>
                  <option value="1">UK</option>
                  <option value="1">Ghana</option>
                </select>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Postal Code <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="0012110" />
            </Form.Group>
          </Col>
        </Row>
    </>
  )
}

export default CardCheckout
