import React from 'react'
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div  style={{ color: '#E5E5E5' }}>
      <div className="container">
         <Row as="div" className="about">
      <Col as="div" sm={12} md={12} lg={12}>
        <h5 className="leading-about">WHO WE ARE</h5>
        <div className="line-about"></div>
      </Col>
      </Row>
       <Row>
        <Col sm={12} md={6} lg={6} className="py-4">
          <div className="heading">
            <div>
              <div style={yello}>
              </div>
              <div style={blue}>
              </div>
            </div>
            <p className="para text-dark ml-3">
              "Our duty is not to fight the 
              disruption, but to embrace it."
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="">
            <p style={textWho}>
              The next generation of Financial Services will be fundamentally different.
            </p>
            <p style={textWho}>
             Our duty is not to fight the disruption, but to embrace it. The journey to fairer, faster, and ubiquitous global access to value has just begun.
            </p>
          </div>
        </Col>
      </Row>
      <Row  className="py-5">
         <Col sm={12} md={6} lg={6}>
            <div className="image-about">
            
            </div>
         </Col>
         <Col sm={12} md={6} lg={6}>
          <div className="mb-4 margin-left">
            <h5 className="about-belief">Our Belief</h5>
            <p className="about-belief-text">Remittance and other legacy financial services targeting the world's unbanked population are not capturing the true economic potential of this market.</p>
          </div>
          <div className="margin-left pt-5">
            <h5 className="about-belief">Our Mission</h5>
            <p className="about-belief-text">To deliver a platform that eliminates the need for remittance by providing comprehensive digital payment services internationally.</p>
          </div>
         </Col>
      </Row>
      <Row className="py-5">
        <Col sm={12} md={6} lg={6}>
          <h5 className="about-belief">The Big Picture</h5>
          <ul>
              <li className="about-belief-text py-2">Global remittances have reached $138 billion</li>
              <li className="about-belief-text">The cost of an average remittance is 10.4% of the amount transferred</li>
              <li className="about-belief-text py-2">50% of E-commerce will be happening through mobile phone</li>
              <li className="about-belief-text py-2">Digital Wallet market projecton for 2022 is USD 3.2 Trillion</li>
              <li className="about-belief-text py-2">Globally, 2 billion adults remain unbanked</li>
              <li className="about-belief-text py-2">Unbanked spending will exceed $400 Billion in 2019</li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={6} as="div" className="d-none d-md-block">
          <Row>
              <Col sm={12} md={6} lg={6} className="h-100 my-auto self-align-center" style={{ paddingRight: '0' }}>
            <div className="big-picture-img"></div>
            </Col>
            <Col sm={12} md={6} lg={6}>
                <div className="big-picture-img2 ml-5 mb-3" ></div>
                <div className="big-picture-img3"></div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="py-5">
        <Col sm={12} md={6} lg={6}>
          <h5 className="about-belief">We are Located at:</h5>
          <p className="text-dark text-location"><strong>Head Office:</strong> 7b Ondo Street, Osborne Foreshore Estate Ikoyi.</p>
          <p className="text-dark text-location"><strong>Phone Number:</strong> 07017808188</p>
        </Col>
      </Row>
      </div>
      <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d126868.31206360814!2d3.346959903992507!3d6.440927427916407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.4515031!2d3.2758920999999996!4m3!3m2!1d6.440843!2d3.417265!5e0!3m2!1sen!2sng!4v1631630096474!5m2!1sen!2sng" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}



const yello = {
 backgroundColor: '#F6C54C',
  width: '1px',
  height: '36px',
  border: '2px solid #F6C54C',
}

const blue = {
  backgroundColor: '#3785F7',
  width: '1px',
  height: '36px',
  border: '2px solid #3785F7',
}

const textWho = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '167.77%',
  textAlign: 'justify',
  letterSpacing: '0.035em',
  color: '#121212'
}

export default About
