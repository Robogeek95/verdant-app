import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

const CryptoCheckout = () => {
  return (
    <>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Crypto Currency <span className="text-danger">*</span></Form.Label>
                <select class="form-control" name="" id="">
                  <option selected>Select Crytocurrent</option>
                  <option value="1">USDT</option>
                  <option value="1">BITCOIN</option>
                  <option value="1">ADA</option>
                </select>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Exchange Rate <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Exchange Rate" />
            </Form.Group>
          </Col>
        </Row>
    </>
  )
}

export default CryptoCheckout
