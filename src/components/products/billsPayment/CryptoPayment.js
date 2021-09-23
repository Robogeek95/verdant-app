import React from 'react'
import { Row, Col, Image, Form} from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import Banner from '../../images/bill-image/bill-crypto.png';
import Destv from '../../images/bill-image/dstv.png';
import Ekedc from '../../images/bill-image/ekedc.png';
import Gotv from '../../images/bill-image/gotv.png';
import Spectranet from '../../images/bill-image/spectranet.png';
import Startime from '../../images/bill-image/startime.png';
import Cryto from '../../images/bill-image/cryto.png';
import CardMaster from '../../images/bill-image/card-master.png';

const CryptoPayment = () => {
  return (
    <div className="py-4">
        <Row>
          <Col sm={12} md={12} lg={12} className="py-3">
            <h6 style={{ fontSize: '18px', fontWeight: '400' }}>Home <ChevronRight /> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>Bill Payment</span></h6>
          </Col>
      </Row>
        <Row>
         <Col sm={12} md={12} lg={12}>
          <div className="banner-image">
            <Image  src={Banner} className="img-fluid" alt="Bill Payment Banner"/>
          </div>
        </Col>
      </Row>   
      <section className="py-3 my-5 bg-white">
          <Row  className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <h5 style={{ fontSize: '24px', fontWeight: '400' }}>Select Biller</h5>
          </Col>
        </Row>
        <div className="grid-element text-center">
           <Card style={{ width: '8rem' }} className="mx-auto">
            <Card.Img  src={Destv} style={{ width: '8rem' }} />
          </Card>
          <Card as='div' style={{ width: '8rem' }}  className="mx-auto">
            <Card.Img  src={Ekedc} style={{ width: '8rem' }} />
          </Card>
           <Card as='div' style={{ width: '8rem' }}  className="mx-auto">
            <Card.Img  src={Gotv} style={{ width: '8rem' }} />
          </Card>
           <Card as='div' style={{ width: '8rem' }}  className="mx-auto">
            <Card.Img  src={Spectranet} style={{ width: '8rem' }} />
          </Card>
          <Card as='div' style={{ width: '8rem' }}  className="mx-auto">
            <Card.Img  src={Startime} style={{ width: '8rem' }} />
          </Card>
        </div>
        <hr />
         <Row  className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <h6 style={{ fontSize: '14px', fontWeight: '400' }}>Required Fields <span className="text-danger">*</span> </h6>
            <h5 className="pt-2" style={{ fontSize: '24px', fontWeight: '500' }}>Step 1: Enter your DSTV details <span className="text-danger">*</span> </h5>
          </Col>
        </Row>
        <Form>
           <Row  className="mx-auto py-2">
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Smart Card Number <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="000 000" />
              </Form.Group>
              
           </Col>
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Bouquet <span className="text-danger">*</span></Form.Label>
                   <select class="form-control" name="" id="">
                     <option selected>Select Bouquet</option>
                     <option value="1">Good</option>
                     <option value="1">Nice</option>
                     <option value="1">Okay</option>
                   </select>
              </Form.Group>
           </Col>
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" >
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Amount <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Amount" bg="secondary" />
              </Form.Group>
           </Col>
          </Row>
        </Form>
        <hr />
         <Row  className="mx-auto py-2">
          <Col sm={12} md={12} lg={12}>
            <h5 className="pt-2" style={{ fontSize: '24px', fontWeight: '500' }}>Step 2: Enter your Personal details</h5>
          </Col>
        </Row>
        <Form>
           <Row  className="mx-auto py-2">
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>First Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>  
           </Col>
            <Col sm={12} md={4} lg={4}>
               <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Surname <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Surname" />
              </Form.Group>
           </Col>
            <Col sm={12} md={4} lg={4}>
              <Form.Group className="mb-3 formControl" >
                <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Phone Number<span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" bg="secondary" />
              </Form.Group>
           </Col>
          </Row>
        </Form>
        <hr />
         <Row  className="ml-2 py-2">
          <Col sm={12} md={12} lg={12}>
            <h5 className="pt-2" style={{ fontSize: '24px', fontWeight: '500' }}>Step 3: Select Payment Type</h5>
            <div className="payment-method">
                <Image src={CardMaster} alt="Master Card"/>
                <Image src={Cryto} alt="Master Card"/>
            </div>
          </Col>
        </Row>
        <Form>
        <Row className="ml-2">
            <Col sm={12} md={6} lg={6}>
              <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Crypto Currency<span className="text-danger">*</span></Form.Label>
                    <select class="form-control" name="" id="">
                      <option selected>Select Crypto Currency</option>
                      <option value="1">USA</option>
                      <option value="1">UK</option>
                      <option value="1">Ghana</option>
                    </select>
              </Form.Group>
            </Col>
            <Col sm={12} md={3} lg={3}>
                <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Expiry Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col sm={12} md={4} lg={4} className="mx-auto">
                <button className="btn btn-primary btn-block" style={{ fontSize: '18px', fontWeight: '500' }}>Pay Now</button>
            </Col>
          </Row>
        </Form>
      </section>
    </div>
  )
}

export default CryptoPayment
