import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="py-5 footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h2 className="footer-title">Always here to help</h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="footer-text">Support is just a few taps away. Get questions answered by using our help library</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="pt-3">
        <Col xs={6} md={ 3 } lg={ 3 }  className="mb-3">
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Business</Nav.Link>
              <Nav.Link href="#" className="navLink">Payments</Nav.Link>
              <Nav.Link href="#" className="navLink">Billing</Nav.Link>
              <Nav.Link href="#" className="navLink">Retail</Nav.Link>
              <Nav.Link href="#" className="navLink">Pricing</Nav.Link>
              <Nav.Link href="#" className="navLink">Exchange Rates</Nav.Link>
              <Nav.Link href="#" className="navLink">FAQ</Nav.Link>
            </Nav>
          </Col>  
          <Col xs={6} md={ 3 } lg={ 3 }  className="mb-3">
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Developers</Nav.Link>
              <Nav.Link href="#" className="navLink">Docs</Nav.Link>
              <Nav.Link href="#" className="navLink">Insight</Nav.Link>
              <Nav.Link href="#" className="navLink">Open Source</Nav.Link>
              <Nav.Link href="#" className="navLink">PGP Keys</Nav.Link>
              <Nav.Link href="#" className="navLink">Integrations</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 }  className="mb-3">
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Company</Nav.Link>
              <Nav.Link href="#" className="navLink">About</Nav.Link>
              <Nav.Link href="#" className="navLink">Careers</Nav.Link>
              <Nav.Link href="#" className="navLink">Merchant Directory</Nav.Link>
              <Nav.Link href="#" className="navLink">Press</Nav.Link>
              <Nav.Link href="#" className="navLink">Blog</Nav.Link>
              <Nav.Link href="#" className="navLink">Stats</Nav.Link>
              <Nav.Link href="#" className="navLink">Legal</Nav.Link>
              <Nav.Link href="#" className="navLink">Privacy</Nav.Link>
              <Nav.Link href="#" className="navLink">Manage Cookies</Nav.Link>
              <Nav.Link href="#" className="navLink">Do Not Sell My Personal Information Under CCPA</Nav.Link>
              <Nav.Link href="#" className="navLink">Accessibility Statemant</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 } className="mb-3">
            <h6 className="text-dark" style={{ fontWeight: 'bold' }}>Get Latest Deals</h6>
            <p className="navLink">Our best promotions sent to your inbox.</p>
            <input type="text" className="form-control" placeholder="Email Address" style={typrography} />
            <button className="btn btn-footer">Subscribe</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className="mb-3">
            <h6 className="text-dark" style={{ fontWeight: 'bold' }}>Contact Us</h6>
            <p><strong>Contact Head Office:</strong> <span style={{ color: '#000' }}> 7b Ondo Street, Osborne Foreshore Estate Ikoyi.</span></p>
            <p><strong>Phone Number:</strong> <span style={{ color: '#000' }}> 07017808188</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const typrography = {
  borderRadius: '5px',
  boxShadow: '0px 10px 30px rgba(116, 167, 249, 0.21)',
}


export default Footer
