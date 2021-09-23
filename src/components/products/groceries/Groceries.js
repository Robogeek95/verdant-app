import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import image2 from '../../images/groceries-image/grocery-banner.png'
import image3 from '../../images/groceries-image/item3.png'
import image4 from '../../images/groceries-image/item4.png'
import image5 from '../../images/groceries-image/item5.png'
import { Col, Row, DropdownButton, Dropdown, Card, Nav } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import Accordion  from './Accordion';
import axios from 'axios'
import GroceryProduct from './GroceryProduct'
import Loader from './Loader'
import Message from './Message'
import { listProducts } from '../../../actions/productActions'
import { Link } from 'react-router-dom'


const Groceries = ({match, location, history}) => {

  const [qty, setQty ] = useState(0)

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList 

 
  const [productCategories, setProductCategories] = useState([])

  useEffect(() => {


    const fetchProductsCategories = async () => {
      const {data} = await axios.get('https://verdant-store.herokuapp.com/product/categories');
      
      setProductCategories(data.categories)
    };
    fetchProductsCategories()

    
    dispatch(listProducts())
  }, [dispatch]);


  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '16px', fontWeight: '400' }}>Products <ChevronRight></ChevronRight> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>Groceries</span></h6>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div>
            <img src={image2} className="img-fluid" alt="The Groceries Banner" />
          </div>  
        </Col>
      </Row>

      
      <section className="p-3 my-5">
      <Row>
        <Col as="div" sm={12} md={3} className="px-0">
          <Card className="mb-5">
            <Accordion title="Category" style={{ fontSize: '20px', fontWeight: '500' }}>
              <Card.Body>
                {productCategories.map(cat => (
                 
                  <div>
                    <Nav defaultActiveKey="/" className="flex-column footer-nav">
                      
                        {cat.sub_categories.map(subCat => (
                          
                         <Link to={`/products/groceries/${cat.ref}/${subCat.ref}`} className="text-decoration-none text-dark">
                            {subCat.name}                         
                          </Link>
                        ))}
                    </Nav>    
                  </div>
                ))}
              </Card.Body>
            </Accordion>
          </Card>

          <Card>
            <Accordion title="New Products" style={{ fontSize: '20px', fontWeight: '500' }}>
              <Card.Body>
                <Nav defaultActiveKey="/" className="flex-column footer-nav">
                  <Nav.Link href="/home" className="text-dark">
                    <div className="d-flex">
                      <img src={image3} alt="New Item Image" className="img-fluid" />
                      <div className="my-auto ml-2">
                        <span className="text-dark" style={{ fontSize: '16px', fontWeight: '500' }}>Tuber of Yam</span>
                        <p className="text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>N 1,000</p> 
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/home" className="text-dark">
                    <div className="d-flex">
                      <img src={image4} alt="New Item Image" className="img-fluid" />
                      <div className="my-auto ml-2">
                        <span className="text-dark" style={{ fontSize: '16px', fontWeight: '500' }}>Beans per derica</span>
                        <p className="text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>N 1,000</p> 
                      </div>
                    </div> 
                  </Nav.Link>
                  <Nav.Link href="/home" className="text-dark">
                  <div className="d-flex">
                    <img src={image5} alt="New Item Image" className="img-fluid" />
                    <div className="my-auto ml-2">
                      <span className="text-dark" style={{ fontSize: '16px', fontWeight: '500' }}>Rice, Pasta, Noodles </span>
                      <p className="text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>N 1,000</p> 
                    </div>
                  </div> 
                  </Nav.Link>
                </Nav>
              </Card.Body>
            </Accordion>
          </Card>            
        </Col>

        {/* /Product->Category->Grocery->Items */}
        <Col md={9} className="px-0 groceries-container">
          <div className="card-wrapper">

            <Card className="pb-5">
              <Row>
                <Col md={6} sm={12}>        
                  <div className="pt-4 mx-4">
                    <h5 className="text-dark grocery-header-text" style={{ fontSize: '18px', fontWeight: '500' }}>Beverage and Cereals</h5>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="pt-4 mx-4 d-flex align-items-center justify-content-center">
                    <span style={{fontSize: '14px', fontWeight: '400', marginRight: '10px' }}>Sort By:</span>
                    <DropdownButton id="dropdown-basic-button" title="New Products" className="ms-4 sorted-btn" id="sorted-btn" style={{ fontSize: '12px', fontWeight: '400', backgroundColor: '#C4C4C436' }}>
                      <Dropdown.Item href="#" className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '500' }}>New Products</Dropdown.Item>
                      <Dropdown.Item href="#" className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Price - Low to High</Dropdown.Item>
                      <Dropdown.Item href="#" className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Price - High to Low</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Col>
              </Row>

              <hr />

              {loading ? <Loader /> : error ? <Message variant="danger">{error} </Message> : (

                <Row>
                  {products.map(product => (
                    <Col sm={12} md={4} key={product.id} className="mb-3 mx-auto">
                      <GroceryProduct product={product} key={product.id} />
                    </Col>
                  ))}             
                </Row>
              )}

            </Card>
          </div>
        </Col>
      </Row>
      </section>
    </div>
  )
}

export default Groceries
