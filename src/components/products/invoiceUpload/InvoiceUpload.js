import React from 'react'
import Banner from '../../images/bill-image/invoicUpload-banner.png';
import { Row, Col, Image, Form } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

const InvoiceUpload = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '18px', fontWeight: '400' }}>Home <ChevronRight /> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>Invoice Upload</span></h6>
        </Col>
      </Row>
        <Row>
         <Col sm={12} md={12} lg={12}>
          <div className="banner-image">
            <Image  src={Banner} className="img-fluid" alt="Invoice Banner"/>
          </div>
        </Col>
      </Row>   
      <section className="py-3 my-5 bg-white">
         <Row  className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <h6 style={{ fontSize: '14px', fontWeight: '400' }}>Required Fields <span className="text-danger">*</span> </h6>
            <h5 style={{ fontSize: '24px', fontWeight: '500' }}>Step 1: Enter Recievers Details<span className="text-danger">*</span> </h5>
          </Col>
        </Row>
        <Form>
           <Row  className="mx-auto py-2">
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Fullname <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Form.Group>
              
           </Col>
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Email <span className="text-danger">*</span></Form.Label>
                   <Form.Control type="text" placeholder="Enter Email" />
              </Form.Group>
           </Col>
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" >
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Phone Number <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" bg="secondary" />
              </Form.Group>
           </Col>
          </Row>
        </Form>
        <hr />
         <Row  className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <h5 className="pt-2" style={{ fontSize: '24px', fontWeight: '500' }}>Step 2: Invoice Details</h5>
          </Col>
        </Row>
        <Form>
           <Row  className="mx-auto py-2">
            <Col sm={12} md={6} lg={6}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Product Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Product Name" />
              </Form.Group>  
           </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="d-flex">
                <Form.Group className="mb-3 mr-2 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Surname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Surname" />
                </Form.Group>
                <Form.Group className="mb-3 mr-2 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Surname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Surname" />
                </Form.Group>
                <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Surname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Surname" />
                </Form.Group>
              </div>
           </Col>
          </Row>
        </Form>
        <hr />
         <Row  className="ml-2 py-2">
          <Col sm={12} md={12} lg={12}>
            <h5 className="pt-2" style={{ fontSize: '24px', fontWeight: '500' }}>Step 3: Select Payment Type</h5>          
          </Col>
        </Row>
        <Form>
          <Row>
            <Col sm={12} md={4} lg={4} className="mx-auto">
              <button className="btn btn-primary btn-block">Pay Now</button>
            </Col>
          </Row>
        </Form>
      </section>
    </div>
  )
}

export default InvoiceUpload
