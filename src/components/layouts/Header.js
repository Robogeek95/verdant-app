import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown, Dropdown, DropdownButton, Image } from 'react-bootstrap';
import logo from "../images/new-logo.png"
import { CartFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../actions/userActions';

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  // console.log(userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }

  const [productCategories, setProductCategories] = useState([])

  useEffect(() => {
    const fetchProductsCategories = async () => {
      const {data} = await axios.get('https://verdant-store.herokuapp.com/product/categories');
     
      setProductCategories(data.categories)
 
          
      // const item = data.categories.map(cat => {
      //   // const globalCategory = cat.sub_categories.map(subcat => console.log(subcat.name))
      //   setProductCategories(cat.category)
      // })
    };
    fetchProductsCategories()
  }, [])



  return (
    <header>
      <Navbar className="py-2 shadow-sm" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="text-primary"> 
              <Image src={logo} style={{ width: '120px' }} alt="Brand Logo" />
            </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="mr-3 text-dark color"  style={{ fontSize: '18px', fontWeight: '400' }}>How It Works</Nav.Link>
            <LinkContainer to="/about"  style={{ fontSize: '18px', fontWeight: '400' }}> 
              <Nav.Link  className="mr-3 text-dark">About Us</Nav.Link>
            </LinkContainer>
            <NavDropdown className="mr-3 text-dark color" title="Products" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '400' }}>
              {/* {productCategories.map(cat => ( */}

                <div>
                    <LinkContainer to="/products/groceries" style={{ fontSize: '12px', fontWeight: '400' }}>           
                      <NavDropdown.Item className="text-dark navlink">Groceries</NavDropdown.Item>
                    </LinkContainer>
                </div>
              {/* ))} */}
                {/* Bill Payment Link */}
                 <LinkContainer to="/products/billPayment" style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Bills Payment
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/invoiceUpload"  style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Invoice Upload
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/checkout" style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Checkout
                  </NavDropdown.Item>
                </LinkContainer>

            </NavDropdown>

            <NavDropdown className="mr-3 text-dark color" title="Help" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '400' }}>
              <LinkContainer to="/help/faq" style={{ fontSize: '18px', fontWeight: '400' }}>
                <NavDropdown.Item className="text-dark navlink"  style={{ fontSize: '12px', fontWeight: '400' }}>
                  FAQs
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/help/contact" style={{ fontSize: '18px', fontWeight: '400' }}>
                <NavDropdown.Item className="text-dark navlink"  style={{ fontSize: '12px', fontWeight: '400' }}>
                  Contact Us
                </NavDropdown.Item>
              </LinkContainer>
              
            </NavDropdown>

            <LinkContainer to="/cart" style={{ fontSize: '18px', fontWeight: '400' }}>
              {/*  style={{ fontSize: '12px', fontWeight: '400' }} */}
              <Nav.Link className="mr-3 text-dark">
                Cart  
                <CartFill className="ml-2" size={20} style={{ fontSize: '7px', fontWeight: '500' }} />
              </Nav.Link>
            </LinkContainer>
            {/* <DropdownButton id="dropdown-basic-button" title="Account" className="ms-4 dropdown-btn" style={{ fontSize: '18px', fontWeight: '500' }}> */}
              {userInfo ? (
                <div>
                  <DropdownButton id="dropdown-basic-button" title={userInfo.user.name} className="ms-4 dropdown-btn login-btn" style={{ fontSize: '12px', fontWeight: '400' }}>
                    <LinkContainer to="/profile">
                      <Dropdown.Item className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Profile</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                      <Dropdown.Item className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }} onClick={logoutHandler}>Logout</Dropdown.Item>
                    </LinkContainer>
                  </DropdownButton>
                </div>
              ) : (
                <div>
                  <DropdownButton id="dropdown-basic-button" title="Account" className="ms-4 dropdown-btn" style={{ fontSize: '18px', fontWeight: '500' }}>
                    <LinkContainer to="/login">
                      <Dropdown.Item className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Login</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <Dropdown.Item className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Signup</Dropdown.Item>
                    </LinkContainer>
                  </DropdownButton>
                </div>
              )}
              
            {/* </DropdownButton> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}

export default Header
