import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Image from '../../images/slug.png'
import { Link }from 'react-router-dom';
import PropTypes from 'prop-types'


const OurProduct = () => {
  return (
    <>
      <Row className="py-3">
      <Col sm={12} md={6} lg={6}>
        <h5 className="ourProduct">Our Product</h5>
        <div>
            <p className="product-text">What does the unbanked population do with the cash they receive from traditional remittance?
            They primarily pay bills and then purchase basic consumer staple products locally.</p>
            <p className="product-text">75% of all cash received from remittance is spent in 4 categories:</p>
              <ul>
                <li className="product-text"><span className="text-danger">*</span> Bill Payment (Utilities & Telecom)</li>
                <li  className="product-text"><span className="text-danger">*</span>  Household (Groceries, Fuel, Clothing)</li>
                <li  className="product-text"><span className="text-danger">*</span>  Medical (Clinic & Pharmacy)</li>
              </ul>
          </div>
        <div style={overlay}>
            <img src={Image} alt="" style={imageStyle}/>
          </div>
          <div className="card card-body rounded border-0 mb-3">
            <h5 className="ourProduct">Send Money</h5>
        <div className="mb-3">
            <p className="product-text">If you still want to perform the traditional remittance, we make that happen as well. You  can send money to over 32 African countries on our secured platform and you won't have to wait for days for the fulfilment .</p>
              <Link to="/products/billPayment" className="para-card">
                Send Money here
              </Link>
        </div>
          </div>
      </Col>
      <Col sm={12} md={6} lg={6} className="mx-auto">
        <div className="grid-item">
          <Link to="/products/groceries">
              <div className="item1" style={items}>
                  <h6 style={itemText}>Groceries</h6>
              </div>
          </Link>
             <Link to="/products/groceries">
              <div className="item2" style={items}>
                <h6 style={itemText}>Medical</h6>
              </div>
           </Link>
            <Link to="/products/billPayment">
              <div className="item3" style={items}>
                  <h6 style={itemText}>Bill Payment</h6>
             </div>
            </Link>
             <Link to="/products/invoiceUpload">
              <div className="item4" style={items}>
                <h6 style={itemText}>Invoice Upload</h6>
              </div>
            </Link>
        </div>
      </Col>
    </Row>
    </>
  )
}



const imageStyle = {
  position: 'absolute',
  width: '300px',
  height: '250px',
  left: '-70px',
  top: '-70px'

}

const overlay = {
  position: 'relative',
}

const items = {
  // width: '263px',
  height: '242px',
  marginBottom: '1rem'
}

const itemText = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '138.77%',
  textAlign: 'center',
  color: '#fff',
  paddingTop: '6rem'
 
}

OurProduct.propTypes = {
  imageStyle: PropTypes.object.isRequired,
  itemText: PropTypes.object.isRequired,
  overlay: PropTypes.object.isRequired,
}






export default OurProduct
