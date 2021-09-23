import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row, Form, Image } from 'react-bootstrap';
import { Archive, Heart, Record2 } from 'react-bootstrap-icons';
import Crypto from '../../images/bill-image/cryto.png';
import CardMaster from '../../images/bill-image/card-master.png';
import CardCheckout from './CardCheckout';
import CryptoCheckout from './CryptoCheckout';
import { cartShippingAddress } from '../../../actions/cartAtions';

const Checkout = ({history}) => {

  const cart = useSelector(state => state.cart)
  const { shippingAddress, cartItems } = cart

  const [receiversName, setReceiversName] = useState(shippingAddress.receiversName)
  const [receiversAddress, setReceiversAddress] = useState(shippingAddress.receiversAddress)
  const [receiversPhone, setReceiversPhone] = useState(shippingAddress.receiversPhone)
  const [receiversCity, setReceiversCity] = useState(shippingAddress.setReceiversCity)
  const [receiversState, setReceiversState] = useState(shippingAddress.setReceiversState)
  const [deliveryMethod, setDeliveryMethod] = useState(shippingAddress.deliveryMethod)
  const [paymentMethod, setPaymentMethod] = useState(shippingAddress.paymentMethod)

  const [cardNumber, setCardNumber] = useState()
  const [cardExpiry, setCardExpiry] = useState()
  const [cardCVC, setCardCVC] = useState()
  const [country, setCountry] = useState(shippingAddress.country)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [exchangeRate, setExchangeRate] = useState(shippingAddress.exchangeRate)
  const [crypto, setCrypto] = useState(shippingAddress.crypto)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(cartShippingAddress({receiversName, receiversAddress, receiversPhone, receiversCity, receiversState, deliveryMethod, paymentMethod, country, postalCode, exchangeRate, crypto}))
  }

  return (
    <section className="py-5">
      <Row className="py-3">
        <Col sm={12} md={12} lg={12}>
          <h5 style={{ fontSize: '18px', fontWeight: '500' }}>CHECKOUT</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card className="p-3">
            <h5 className="card-header bg-white px-0" style={{ fontSize: '24px', fontWeight: '500' }}>Step 1: Enter Reciever’s Details</h5>
            <Form onSubmit={submitHandler}>
           <Row  className=" py-2">
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Fullname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" value={receiversName} onChange={(e) => setReceiversName(e.target.value)} required/>
                </Form.Group>
                
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" >
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Phone Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" bg="secondary" value={receiversPhone} onChange={(e) => setReceiversPhone(e.target.value)} required/>
                </Form.Group>
              </Col>
              </Row>
              <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Address <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" value={receiversAddress} onChange={(e) => setReceiversAddress(e.target.value)} required/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Town / City  <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Town / City" value={receiversCity} onChange={(e) => setReceiversCity(e.target.value)} required/>
                </Form.Group>
                </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>State <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter State" value={receiversState} onChange={(e) => setReceiversState(e.target.value)} required/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="mt-5">
                  <h5 className="card-header bg-white px-0" style={{ fontSize: '24px', fontWeight: '500' }}>Step 2: Choose Delivery Method</h5>
                  <div>

                    {/* <Form.Group className="mb-3 formControl" controlId="formBasicEmail"> */}
                      <Form.Check type="radio" value="door delivery" name="deliveryMethod" label="Door Delivery" id="doorDelivery" checked onChange={(e) => setDeliveryMethod(e.target.value)}></Form.Check>
                      {/* <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}><span style={{ fontSize: '18px', fontWeight: '400' }}>Door Delivery</span></Form.Label> */}
                    {/* </Form.Group> */}
                    {/* <h6 className="pt-3">
                      <Record2 size={23} className="text-primary" />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Door Delivery</span>
                    </h6> */}
                    <p style={{ fontSize: '16px', fontWeight: '700', color: '#181818', lineHeight: '21.52px', marginLeft: '3.5px' }}>Delivered between Monday 13 Sep and Wednesday 15 Sep for ₦ 1,000</p>
                  </div>
                  <div>

                    {/* <Form.Group className="mb-3 formControl" controlId="formBasicEmail"> */}
                    <Form.Check type="radio" value="pickup" name="deliveryMethod" label="Pick Up" id="pickup" onChange={(e) => setDeliveryMethod(e.target.value)}></Form.Check>
                    {/* </Form.Group> */}
                    {/* <h6 className="pt-3">
                      <Record2 size={23} />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Pickup Centre</span>
                    </h6> */}
                    <p style={{ fontSize: '16px', fontWeight: '400',  color: '#181818', lineHeight: '21.52px', marginLeft: '3.5px' }}>Ready for pickup between Wednesday 8 Sep to Thursday 9 Sep with cheaper shipping fees</p>
                  </div>
                  <h6 className="text-warning" style={{ fontSize: '16px', fontWeight: '700',  color: '#F6C54C', lineHeight: '21.52px' }}>SELECT MERCHENT CENTRE</h6>
                  <div className="mt-5">
                    <h5 className="card-header bg-white px-0">Step 3: Select Payment Type</h5>
                    <p className="pt-3" style={{ fontSize: '18px', fontWeight: '400',  color: '#181818', lineHeight: '24.21px' }}>How do you want to pay for this order?</p>
                    <div className="image-payment">
                      <Image src={CardMaster} id={paymentMethod} />
                      <Image src={Crypto}/>
                    </div>
                    {/* Payment Type Component */}




                <Row className="mt-4">
                  <Col sm={12} md={12} lg={12}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Card Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Enter Card Number" onChange={(e) => setCardNumber(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Expiry Date <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" onChange={(e) => setCardExpiry(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>CVC <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="CVC" onChange={(e) => setCardCVC(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Country <span className="text-danger">*</span></Form.Label>
                        <select class="form-control" name="country" id="country">
                          <option selected>Select Country</option>
                          <option value={country}>USA</option>
                        </select>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                      <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Postal Code <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="0012110" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>



                    

                    {/* <CardCheckout /> */}
                    <CryptoCheckout />
                  </div>
                </Col>
              </Row>
              <Row>
            <Col sm={12} md={4} lg={4} className="mx-auto">
              <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '26.44px' }}>Pay Now</button>
            </Col>
          </Row>
        </Form>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
            {/* {cartItems.map((item, index) => ( */}


            <Card>
              <Card.Header className="d-flex card-header justify-content-between bg-white pt-3">
                <h5 className="text-dark" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '26.9px' }}>YOUR ORDER</h5>
                <h6 className="text-dark" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '26.9px' }}>({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items</h6>
              </Card.Header>
              <Card.Body>
                
                <div className="d-flex justify-content-between">
                  <Card.Text className="text-dark" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '24.21px' }}>Sub-total</Card.Text>
                  <Card.Subtitle className="text-dark" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</Card.Subtitle>
                </div>
                
                <div className="d-flex justify-content-between">
                  <Card.Text className="text-dark" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '24.21px' }}>Delivery Fee</Card.Text>
                  <Card.Subtitle className="text-dark" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>$0.00</Card.Subtitle>
                </div>
                
                <div className="d-flex justify-content-between">
                  <Card.Title style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>TOTAL</Card.Title>
                  <Card.Subtitle style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</Card.Subtitle>
                </div>
                {/* <div className="py-2">
                  <Card.Text className="mr-3 text-warning">
                  <Heart className="mr-3" size={20}/>
                    <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px' }}>MOVE TO SAVED ITEMS</span>
                  </Card.Text>
                </div> */}
                {/* <div className="py-2">
                  <Card.Text className="mr-3 text-warning">
                    <Archive className="mr-3" size={20}/>
                    <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px' }}>REMOVE</span>
                  </Card.Text>
                </div> */}
              </Card.Body>
            </Card>
            {/* ) )} */}
        </Col>
      </Row>
    </section>
  )
}

export default Checkout
