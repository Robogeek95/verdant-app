import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { Heart, Cart } from 'react-bootstrap-icons'
import userIcon from './images/user-icon.png'
import Message from './products/groceries/Message'
import Loader from './products/groceries/Loader'
// import { userUpdateProfile } from '../actions/userActions'
import { getUserDetails, updateUserP } from '../actions/userActions'
// import { userUpdateProfile } from '../actions/userActions'
// import { userUpdateProfile } from '../actions/userActions'

import cartSideIcon from './images/cart-side-icon.png'
import heartIcon from './images/heart-icon.png'

const Profile = ({history, location}) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails
  // console.log(user)

  // Check if the user is logged in. If so bring in the user info
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  // console.log(userInfo)

  const updateUser = useSelector(state => state.updateUser)
  const { success } = updateUser
  // console.log(success)

  useEffect(() => {
    if(!userInfo) {
      history.push('/login')
    } else {
      dispatch(getUserDetails())
      setFirstName(firstname)
      setLastName(lastname)
      setEmail(email)
      setPhone(phone)
      if(!userInfo.user.id){
        dispatch(getUserDetails())
      } else {
        setFirstName(userInfo.user.name)
        // setLastName(user.lastname)
        setEmail(userInfo.user.email)
        setPhone(userInfo.user.phone)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Password do not match')
    } else {
      // UPDATE PROFILE
      dispatch(updateUserP({ id: userInfo.user.id, firstname, lastname, email, phone, password }))
    }
  }

  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '24px', fontWeight: '500', lineHeight: '35.25px' }}>Account Details</h6>
        </Col>
      </Row>

      <Row>
        <Col md={3} lg={4}>
          <div style={{ backgroundColor: '#F9F9F9', padding: '40px 0', borderRadius: '5px', boxShadow: '0px 4px 28px rgba(55, 133, 247, 0.03)', height: '100%' }}>
            <ul>
              <Link to="/profile" className="text-decoration-none text-dark">
                <li className="bg-white d-flex align-items-center justify-items-center py-3 px-3" style={{ borderLeft: '3px solid #F6C54C' }}>
                  <img src={userIcon} alt="User Icon" style={{ width: '14.09px', height: '21px', marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '29.38px' }}>Profile Details</p>
                </li>
              </Link>
              <Link to="/orders" className="text-decoration-none text-dark">
                <li className="d-flex align-items-center justify-items-center py-3 px-3">
                  <Cart size={20} style={{ marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>My Orders</p>
                </li>
              </Link>
              <Link to="/saved-items"  className="text-decoration-none text-dark">
                <li className="d-flex align-items-center justify-items-center py-3 px-3">
                  <Heart size={20} style={{ marginRight: '15px' }} />
                  <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>Saved Items</p>
                </li>
              </Link>
              <ul style={{ marginLeft: '80px', listStyle: 'none' }}>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Products</li>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Invoices</li>
              </ul>
            </ul>
          </div>
        </Col>
        <Col md={9} lg={8}>
          <Card>
            <Card.Body>

              {message && <Message variant="danger">{message}</Message>}
              {success && <Message variant="success">Profile Updated</Message>}
              {loading && <Loader />}

              <form onSubmit={submitHandler} >
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div className="form-group">
                      <label htmlFor="first-name">First Name</label>
                      <input className="first-name" type="text" id="first-name" placeholder="First Name" value={userInfo.user.name} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input className="email" type="email" id="email" placeholder="Email Address" value={userInfo.user.email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new-password">New Password</label>
                      <input className="new-password" type="password" id="new-password" placeholder="New Password" />
                    </div>
                    
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <div className="form-group">
                      <label htmlFor="surname">Last Name</label>
                      <input className="surname" type="text" id="surname" placeholder="Last Name" value={userInfo.user.name} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input className="phone" type="phone" id="phone" placeholder="Phone" value={userInfo.user.phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm New Password</label>
                      <input className="confirm-password" type="password" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                  </Col>
                </Row>
                <div style={{ width: '48%',  }}>
                  <input className="btn btn-primary btn-block btn-lg" type="submit" value="Save Changes" />
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
