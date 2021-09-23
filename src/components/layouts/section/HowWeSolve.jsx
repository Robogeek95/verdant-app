import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../../images/slug.png';

const imageStyle = {
  position: 'absolute',
  width: '300px',
  height: '250px',
  left: '-70px',
  top: '-70px',

};

const overlay = {
  position: 'relative',
};

const items = {
  // width: '263px',
  height: '242px',
  marginBottom: '1rem',
};

const itemText = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '138.77%',
  textAlign: 'center',
  color: '#fff',
  paddingTop: '6rem',

};

const HowWeSolve = () => (
  <>
    <Row className="py-3">
      <Col sm={12} md={6} lg={6}>
        <h5 className="ourProduct">How We Solve The Problem</h5>
        <div>
          <p className="product-text">
            By providing the ability for traditional remittance senders to directly
            pay all bills and facilitate payment of common local products and services
            on behalf of the receiver, BL Digital can eliminate the need for cash
            remittance entirely.
          </p>
          <p className="product-text">75% of all cash received from remittance is spent in 4 categories:</p>

          <ul>
            <li className="product-text">
              <span className="text-danger">*</span>
              {' '}
              Through exclusive partnerships
            </li>
            <li className="product-text">
              <span className="text-danger">*</span>
              {' '}
              Deep technology integration
            </li>
            <li className="product-text">
              <span className="text-danger">*</span>
              {' '}
              Easy cash load into the BL Digital Platform
            </li>
            <li className="product-text">
              <span className="text-danger">*</span>
              {' '}
              Invoice Settlement (School fees, house rents, hospital bills)
            </li>
          </ul>
        </div>
        <div style={overlay}>
          <img src={Image} alt="" style={imageStyle} />
        </div>
        <div className="card card-body rounded border-0 mb-3">
          <h5 className="ourProduct">Send Money</h5>
          <div className="mb-3">
            <p className="product-text">If you still want to perform the traditional remittance, we make that happen as well. You  can send money to over 32 African countries on our secured platform and you won&apos;t have to wait for days for the fulfilment .</p>
            <Link to="/products/billPayment" className="para-card">
              Send Money here
            </Link>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={6} className="mx-auto">
        <div className="grid-item">
          <Link to="/products/billPayment">
            <div className="item3" style={items}>
              <h6 style={itemText}>
                Bill Payment
                <br />
                {' '}
                (Utilities & Telecom)
              </h6>
            </div>
          </Link>
          <Link to="/products/groceries">
            <div className="item1" style={items}>
              <h6 style={itemText}>
                Household
                <br />
                {' '}
                (Groceries, Fuel, Clothing)
              </h6>
            </div>
          </Link>
          <Link to="/products/groceries">
            <div className="item2" style={items}>
              <h6 style={itemText}>
                Medical
                <br />
                {' '}
                (Clinic & Pharmacy)
              </h6>
            </div>
          </Link>

          <Link to="/products/invoiceUpload">
            <div className="item4" style={items}>
              <h6 style={itemText}>
                Invoice Settlement
                <br />
                {' '}
                (School fees, house rents, hospital bills)
              </h6>
            </div>
          </Link>
        </div>
      </Col>
    </Row>
  </>
);

export default HowWeSolve;
