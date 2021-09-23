import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { LinkContainer, Link } from 'react-router-bootstrap'
import Logo from './images/logo.PNG'
import signupBarner from './images/signup-barner.png'
import eye from './images/eye.png'
import googleIcon from './images/google-icon.png'
import Message from './products/groceries/Message'
import Loader from './products/groceries/Loader'
import { register } from '../actions/userActions'

const Signup = ({history, location}) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch({history})

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo) {
      // history.pushState(redirect)
      history.push('/products/groceries')
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Password do not match')
    } else {
      dispatch(register(firstname, lastname, email, phone, password))
      history.push('/')
    }
  }

  return (
    <div>
      <div className="container-login">
        <div className="right">
          <Row>
            <div>
              <img src={signupBarner} alt="Signup Barner" />
            </div>
          </Row>
        </div>

        <div className="left">
          <div className="login-form">
            <div className="d-flex">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
              <h2 className="text-primary ml-3" style={{ fontSize: '32.35', fontWeight: '700' }}>Verdant Digital</h2>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Create a Verdant account to begin an amazing experience</p>
            </div>

            {message && <Message variant="danger">{message}</Message>}
            {loading && <Loader />}

            <form onSubmit={submitHandler} className="form">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input className="first-name" type="text" id="first-name" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input className="last-name" type="text" id="last-name" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="email" type="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input className="phone" type="phone" id="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="password" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input className="confirm-password" type="password" id="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="mb-5">
                <input className="btn btn-primary btn-block btn-lg" type="submit" value="Sign Up" />
                {/* <input className="submit" type="submit" value="Create Account" /> */}
              </div>

              <div className="or-container">
                <div className="left-line"></div>
                <span>or</span>
                <div className="right-line"></div>
              </div>

              <div className="mt-5"></div>
              
              <button className="btn btn-outline-primary p-3 btn-block">
                <img src={googleIcon} alt="Google Icon" className="mr-1" />
                Google
              </button>

              <p className="no-account text-center">Already have account? 
                {/* <LinkContainer to={redirect ? `/login?redirect=${redirect}` : "/login"}>  */}
                <LinkContainer to="/login"> 
                  <a>Login</a>
                </LinkContainer>
                {/* <a href="#">Create an account</a> */}
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup
