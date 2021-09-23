import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { User, HeartFill, Cart, CartFill, TrashFill } from 'react-bootstrap-icons'
import userNoFillIcon from './images/user-nofill-icom.png'
import saveItems from './images/saved-item.png'

const SavedItems = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Home <ChevronRight /> <span  style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Account Details</span><ChevronRight /><span className="text-primary" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '26.44px' }}>Saved Items</span></h6>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={12} className="py-1">
          <h6 style={{ fontSize: '24px', fontWeight: '500', lineHeight: '35.25px' }}>Account Details</h6>
        </Col>
      </Row>

      <Row>
        <Col md={3} lg={4}>
          <div style={{ backgroundColor: '#F9F9F9', padding: '40px 0', borderRadius: '5px', boxShadow: '0px 4px 28px rgba(55, 133, 247, 0.03)', height: '100%' }}>
            <ul>
              <Link to="/profile" className="text-decoration-none text-dark">
                <li className="d-flex align-items-center justify-items-center py-3 px-3">
                  <img src={userNoFillIcon} alt="User Icon" style={{ width: '14.09px', height: '21px', marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>Profile Details</p>
                </li>
              </Link>
              <Link to="/orders" className="text-decoration-none text-dark">
                <li className="d-flex align-items-center justify-items-center py-3 px-3" >
                  <Cart size={20} style={{ marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>My Orders</p>
                </li>
              </Link>
              <Link to="/saved-items" className="text-decoration-none text-dark">
                <li className="bg-white d-flex align-items-center justify-items-center py-3 px-3" style={{ borderLeft: '3px solid #F6C54C' }}>
                  <HeartFill size={20} style={{ marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '29.38px' }}>Saved Items</p>
                </li>
              </Link>
              <ul style={{ marginLeft: '80px', listStyle: 'none' }}>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Products</li>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Invoices</li>
              </ul>
            </ul>
          </div>
        </Col>

        <Col md={9} lg={8}>
          <Card>
            <Card.Header className="bg-white">
              <p className="mb-0" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '26.44px' }}>Saved Products (3)</p>
            </Card.Header>
            <Card.Body>           
              <Row>
                <Col sm={4} md={4} lg={4} style={{ background: '#FCFCFC', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.07)', padding: '15px 0', margin: '10px 10px', width: '224px' }}>
                  <div style={{ width: '202px', height: '145px', marginBottom: '16px' }}>
                    <img className="img-fluid" src={saveItems} alt="Saved Item Image" />
                  </div>
                  <div>
                    <Card.Text>Corn Flakes
                      <span style={{ fontSize: '8px', fontWeight: '400', lineHeight: '', color: '#F6C54C', cursor: 'pointer', marginLeft: 'auto' }}>
                        <TrashFill className="text-warning" size={20} />
                      </span>
                    </Card.Text>
                  </div>
                  <Card.Title>
                    N 1,000
                  </Card.Title>
                  <div style={{ width: '50%', textAlign: 'center', margin: '0 auto' }}>
                    <input className="btn btn-primary btn-block" type="submit" value="Buy Now" />
                  </div>
                </Col>                
              </Row>             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SavedItems
