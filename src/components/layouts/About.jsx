import React from "react";
import { Row, Col } from "react-bootstrap";
import { CashStack, People } from "react-bootstrap-icons";

const About = () => (
  <div>
    <div className="container">
      <Row as="div" className="about">
        <Col as="div" sm={12} md={12} lg={12}>
          <h5 className="leading-about">WHO WE ARE</h5>
          <div className="line-about" />
        </Col>

        <div className="row mt-5">
          <Col sm={12} md={6} lg={6}>
            <div className="image-about" />
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="mb-4 margin-left">
              <h5 className="about-belief">Our Belief</h5>
              <p className="about-belief-text">
                Remittance and other legacy financial services targeting the
                world&apos;s unbanked population are not capturing the true
                economic potential of this market.
              </p>
            </div>
            <div className="margin-left pt-5">
              <h5 className="about-belief">Our Mission</h5>
              <p className="about-belief-text">
                To deliver a platform that eliminates the need for remittance by
                providing comprehensive digital payment services
                internationally.
              </p>
            </div>
          </Col>
        </div>
      </Row>

      <Row className="py-5">
        <Col sm={12} md={6} lg={6}>
          <h5 className="about-belief">The Big Picture</h5>
          <ul>
            <li className="about-belief-text py-2">
              Global remittances have reached $138 billion
            </li>
            <li className="about-belief-text">
              The cost of an average remittance is 10.4% of the amount
              transferred
            </li>
            <li className="about-belief-text py-2">
              50% of E-commerce will be happening through mobile phone
            </li>
            <li className="about-belief-text py-2">
              Digital Wallet market projecton for 2022 is USD 3.2 Trillion
            </li>
            <li className="about-belief-text py-2">
              Globally, 2 billion adults remain unbanked
            </li>
            <li className="about-belief-text py-2">
              Unbanked spending will exceed $400 Billion in 2019
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={6} as="div" className="d-none d-md-block">
          <Row>
            <Col
              sm={12}
              md={6}
              lg={6}
              className="h-100 my-auto self-align-center"
              style={{ paddingRight: "0" }}
            >
              <div className="big-picture-img" />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="big-picture-img2 ml-5 mb-3" />
              <div className="big-picture-img3" />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="row py-5 my-5 align-items-center">
        <div className="col-6">
          <div className="mb-4">
            <p className="h2 font-weight-400 text-primary">
              Target Market Focus
            </p>

            <hr
              style={{
                borderWidth: "7px",
                // width: "390px",
                borderColor: "#3446aa3d",
                // borderColor: "linear-gradient(to left, #71B280, #134E5E)",
              }}
              className="mx-auto"
            />
          </div>
          <div>
            <p className="h5 font-weight-normal">
              BL Digital has targeted Nigeria for the initial product launch and
              distribution network buildout. This market provides the best
              transaction volume and revenue potential:
            </p>

            <div className="row mt-5">
              <div className="col-auto">
                <CashStack
                  size={60}
                  className="text-primary"
                />
              </div>

              <div className="col">
                <p>
                  $17.5 Billion Dollars were sent from the diaspora to Nigeria
                  in 2019, making it one of the largest remittance m arket in
                  the world.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-auto">
                <People
                  size={60}
                  className="text-primary"
                />
              </div>

              <div className="col">
                <p>
                  42% of the population in Nigeria remains underbanked and
                  unbanked and relies on cash payment for all local purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img
            alt="map of Nigeria"
            src="./images/naija-map.png"
            className="img-fluid"
          />
        </div>
      </div>

      <Row className="py-5">
        <Col sm={12} md={6} lg={6}>
          <h5 className="about-belief">We are Located at:</h5>
          <p className="text-dark text-location">
            <strong>Head Office:</strong> 7b Ondo Street, Osborne Foreshore
            Estate Ikoyi.
          </p>
          <p className="text-dark text-location">
            <strong>Phone Number:</strong> 07017808188
          </p>
        </Col>
      </Row>
    </div>
    <div className="">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d126868.31206360814!2d3.346959903992507!3d6.440927427916407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.4515031!2d3.2758920999999996!4m3!3m2!1d6.440843!2d3.417265!5e0!3m2!1sen!2sng!4v1631630096474!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  </div>
);

export default About;
