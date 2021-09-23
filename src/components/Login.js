import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { LinkContainer, Link } from 'react-router-bootstrap'
import Logo from './images/logo.PNG'
import loginBarner from './images/login-barner.png'
import eye from './images/eye.png'
import googleIcon from './images/google-icon.png'

import Message from './products/groceries/Message'
import Loader from './products/groceries/Loader'
import { login } from '../actions/userActions' 

const Login = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if(userInfo) {
      // history.pushState(redirect)
      history.push('/products/groceries')
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div>
      <div className="container-login">
        <div className="left">
          <div className="login-form">
            <div className="d-flex">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
              <h2 className="text-primary ml-3" style={{ fontSize: '32.35', fontWeight: '700' }}>Verdant Digital</h2>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Login To Verdant</p>
            </div>

            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}

            <form onSubmit={submitHandler} className="form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="email" type="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="password" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="form-group">
                <input className="checkbox" type="checkbox" id="checkbox"  />
                <label htmlFor="checkbox" id="checkbox-label">Remember Me</label>
                <a href="#">Forgot Password?</a>
              </div>
              <div className="mb-5">
                <input className="btn btn-primary btn-block btn-lg" type="submit" value="Login" />
                {/* <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button> */}
              </div>

              <div className="or-container">
                <div className="left-line"></div>
                <span>or</span>
                <div className="right-line"></div>
              </div>     
            </form>

            <div className="mt-5"></div>
              <div className="mt-5"></div>
              
              <button type="button" className="btn btn-outline-primary btn-lg btn-block">
                <div>  
                  <img src={googleIcon} alt="Google Icon" className="mr-1 img-fluid" />
                  Google
                </div>
              </button>

              <p className="no-account text-center">Don't have an account? 
                {/* <LinkContainer to={redirect ? `/register?redirect=${redirect}` : "/signup"}>  */}
                <LinkContainer to="/signup"> 
                  <a>Create an account</a>
                </LinkContainer>
                {/* <a href="#">Create an account</a> */}
              </p>
          </div>
        </div>
        <div className="right">
          <Row>
            <div>
              <img src={loginBarner} alt="Login Barner" />
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Login
