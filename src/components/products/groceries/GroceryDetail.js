import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Card } from 'react-bootstrap'
import { ChevronRight, Facebook, Twitter, Linkedin, Cursor, Heart} from 'react-bootstrap-icons'
import { listProductDetails } from '../../../actions/productActions'
import Loader from './Loader'
import Message from './Message'
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LatestProducts from '../../layouts/section/LatestProducts'

const GroceryDetail = ({ history, match }) => {

  let [qty, setQty ] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${qty}`)
  }

  return (
    
    <div className="py-4">
      {loading === true ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

        <div>
          
          <Row>
            <Col sm={12} md={12} lg={12} className="py-3">
              <h6 style={{ fontSize: '16px', fontWeight: '400' }}>Products <ChevronRight></ChevronRight> Groceries <ChevronRight></ChevronRight> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>{product.title}</span></h6>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Row className="mb-4">
                    <Col md={6}>
                      <div>
                        <img src={product.image} className="img-fluid" alt="Grocery Item" style={{ height: '500px' }}/>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <h4 className="mt-3" style={{ fontSize: '30px', fontWeight: '500' }}>{product.title}</h4>
                        <p style={{ fontSize: '20px', fontWeight: '500' }}>Product Code: <strong>12345</strong></p>
                        <hr />
                        <h5 className="text-primary" style={{ fontSize: '26px', fontWeight: '500' }}>$ {product.price}</h5>
                        <hr />

                        <div className="d-flex justify-content-even">
                          <div className="mr-4">
                            <span style={{ fontSize: '18px', fontWeight: '400' }}>Quantity</span>
                          </div>
                            <div className="inc-wrapper mb-4 flex-fill">
                              <button type="button" className="minus-btn" onClick={() => setQty(qty > 1 ? qty--: 1)}>&#8722;</button>
                              <span className="item-number">{qty}</span>
                              <button type="button" className="plus-btn" onClick={() => setQty(qty++)}>&#43;</button>
                            </div>
                        </div>
                          <div style={{ width: '300px' }}>
                            <button className="btn btn-block btn-primary" style={{ fontSize: '18px', fontWeight: '500' }} onClick={addToCartHandler}>Add To Cart</button>
                          </div>
                        <hr />
                        <div>
                          <p style={{ fontSize: '20px', fontWeight: '400' }}>Share Product</p>
                          <Link to="/">
                            <Facebook size={35} className="mr-2" />
                          </Link>
                          <Link to="/">
                            <Twitter size={35} className="mr-2 bg-primary p-1 rounded-circle text-white" />
                          </Link>
                          <Link to="/" className="">
                            <Linkedin size={35} className="rounded-circle text-primary mr-2" />
                          </Link>
                          <Link to="/" className="">
                            <Cursor size={35} className="rounded-circle text-white bg-dark p-1" />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <h5 style={{ fontSize: '20px', fontWeight: '500' }}>Product Details</h5>
                      <hr />
                      <p className="mb-4" style={{ fontSize: '16px', fontWeight: '400' }}>{product.description}</p>
                      <p style={{ fontSize: '16px', fontWeight: '400' }}><strong style={{ fontSize: '16px', fontWeight: '700' }}>Serving: </strong>{product.description}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="mt-5 mb-4">
                <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Other items you might like</h6>  
              </div>

              <div className="card card-body">
                <LatestProducts />
              </div>
            </Col>
          </Row>
        </div>
            
      )}
    </div>
  )
}

export default GroceryDetail
