import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import faqImg from './images/FAQ-barner.png'

const FAQ = () => {
  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '16px', fontWeight: '400' }}>Home <ChevronRight></ChevronRight> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>FAQs</span></h6>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div>
            <img src={faqImg} className="img-fluid" alt="FAQ Barner" />
          </div>  
        </Col>
      </Row>

      <div className="faq-container">
        <p className="header-p">
          You don’t see your questions below? Give us a call on  07017808188
        </p>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
        <div className="faq-content-container">
          <div className="faq-button">
            Delivery
          </div>
          <p className="faq-content-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit vulputate amet vitae lacus pulvinar mi bibendum at a. Urna eu lectus ut sed morbi duis dui. Dolor dignissim facilisi aliquam urna quam mattis sed. Scelerisque tincidunt ipsum, lectus tortor enim ut tortor, justo tincidunt. Quam hac phasellus sagittis, amet tempus velit, non tincidunt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
