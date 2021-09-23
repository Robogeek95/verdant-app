import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HowItWorks = () => {
  return (
    <>
       <Row>
        <Col  md={12} lg={12} className="text-center py-4">
           <h5 style={wraper}>HOW IT WORKS</h5>
        </Col>
      </Row>
      <div className="row">
        <div className="col-md-6">
           <h5 className="leading" >Send products in 5 simple steps</h5>
          <div className="d-flex justify-content-even p-3">
            <h5 style={figure} className="mr-3">1</h5>
            <div>
              <h5 style={textheading}>Create An Account</h5>
              <p style={subtext}>Login or Create An Account</p>
            </div>
          </div>
          <div className="d-flex justify-content-even p-3">
            <h5 style={figure} className="mr-3">2</h5>
            <div>
              <h5 style={textheading}>Select Category</h5>
              <p style={subtext}>Select the category of product you want to send</p>
            </div>
          </div>
          <div className="d-flex justify-content-even p-3">
            <h5 style={figure} className="mr-3">3</h5>
            <div>
              <h5 style={textheading}>Fill Details</h5>
              <p style={subtext}>Input receiver’s details</p>
            </div>
          </div>
          <div className="d-flex justify-content-even p-3">
            <h5 style={figure} className="mr-3">4</h5>
            <div>
              <h5 style={textheading}>Select Payment mode</h5>
              <p style={subtext}>Select Payment mode</p>
            </div>
          </div>
          <div className="d-flex justify-content-even p-3">
            <h5 style={figure} className="mr-3">5</h5>
            <div>
              <h5 style={textheading}>Verify and Send</h5>
              <p style={subtext}>Verify transaction and send</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="howitworkImage">
          </div>
        </div>
      </div>
    </>
  )
}

const wraper = {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight:' 500',
    fontSize: '36px',
    lineHeight: '173.5%',
    color: '#3785F7',
}

const textheading = {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight:' 500',
    fontSize: '20px',
    lineHeight: '134.5%',
    color: '#181818',
}
const subtext = {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight:'normal',
    fontSize: '16px',
    lineHeight: '134.5%',
    color: '#181818',
}

const figure = {
  fontFamily: 'Heebo',
  fontStyle: 'normal',
  fontWeight:'700',
  fontSize: '40px',
  lineHeight: '134.5%',
  color: 'rgba(246, 197, 76, 0.46)',
  // border:' 2px solid #F6C54C'

}



export default HowItWorks
