import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  Message  from './Message'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Heart, TrashFill } from 'react-bootstrap-icons'
import { addToCart, removeFromCart } from '../../../actions/cartAtions'

const Cart = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  
  const removeFromcartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    if(!userInfo){
      history.push('/login?redirect=shipping')
    } else {
      history.push(`/products/checkout?shipping/${productId}/${qty}`)
    }
  }
  

  return (
    <div className="py-5">
      <Row className="py-4">
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '18px', fontWeight: '500', fontWeight: '26.44' }}>Shopping Cart</h6>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            <Col md={6} className="cart-items-header">
              <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Product</p>
            </Col>
            <Col md={3} className="cart-items-header">
              <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Quantity</p>
            </Col>
            <Col md={3} className="cart-items-header">
            <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Price</p>
            </Col>
          </Row>

          {cartItems.length === 0 ? (<Message>Your Cart is empty 
            <div className="mt-3">
              <Link to="/products/groceries">
                <h3>Go Shopping</h3>
              </Link>
            </div></Message>) : (
            <div>
              {cartItems.map(item => (
              
                <Row className="bg-white py-4" key={item.product}>
                  <Col md={6} className="py-4">
                    <div className="d-flex justify-space-between">
                      <img src={item.image} alt="Cart Item Image" style={{ height:'300px', width: "300px" }} className="img-fluid" />
                      <div className="ml-4">
                        <p style={{ fontSize: '18px', fontWeight: '500' }} className="pt-5">{item.name}</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} as="div" className="my-auto">
                    <div >
                      <div className="inc-wrapper mb-4 flex-fill">
                        <button className="minus-btn" onClick={() => dispatch(addToCart(item.product, item.qty > 1 ? item.qty-- : 1))}>&#8722;</button>
                        <span className="item-number">{item.qty}</span>
                        <button className="plus-btn" type="button" onClick={() => dispatch(addToCart(item.product, item.qty++))}>&#43;</button>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} as="div" className="my-auto">
                    <div>
                      <p style={{ fontSize: '18px', fontWeight: '500' }}>${item.price}</p>
                    </div>
                  </Col>

                  <Row className="bg-white pb-3 ml-3">
                    <Col md={12}>
                      <Heart className="mr-2 text-warning" size={20}/>
                      <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px', marginRight: '15px', color: '#F6C54C', cursor: 'pointer' }}>MOVE TO SAVED ITEMS</span> 
                        <Button type="button" variant="light" onClick={() => removeFromcartHandler(item.product)}>
                          <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px', color: '#F6C54C', cursor: 'pointer' }}>
                            <TrashFill className="mr-2 text-warning" size={20} />
                            REMOVE
                          </span>
                        </Button>
                    </Col>
                  </Row>
                </Row>
                
              ))}

            </div>

          )}
          
        </Col>

        <Col md={4}>
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
                <Card.Subtitle className="text-dark" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>0.00</Card.Subtitle>
              </div>
              
              <div className="d-flex justify-content-between">
                <Card.Title style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>TOTAL</Card.Title>
                <Card.Subtitle style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</Card.Subtitle>
              </div>
              <Form>
                <Row className="mt-4">
                  <Col md={12}>
                    <div className="mx-auto" style={{ width: '257px' }}>
                      <button className="btn btn-primary btn-block" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                        Proceed To Checkout
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>   
  )
}

export default Cart
