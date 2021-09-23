/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';

const wraper = {
  fontFamily: 'Heebo',
  fontStyle: 'normal',
  fontWeight: ' 500',
  fontSize: '30px',
  lineHeight: '173.5%',
  color: '#3785F7',
};

const title = {
  fontFamily: 'Heebo',
  fontStyle: 'normal',
  fontWeight: ' 500',
  fontSize: '20px',
  lineHeight: '173.5%',
  color: '#3785F7',
};

const page = {
  fontFamily: 'Heebo',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '134.5%',
};

const OurSolution = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.id} className="card card-body">
        <div aria-hidden="true" className={`title ${active} card-title`} onClick={() => onTitleClick(index)} style={{ cursor: 'pointer' }}>
          <h6 style={title}>
            {item.title}
            <span className="float-right">
              {
                active ? <Dash size={25} className="text-primary" />
                  : <Plus size={25} className="text-primary" />
            }
            </span>
          </h6>
        </div>

        <div className={`content ${active}`}>
          {active && <p style={page}>{item.content}</p> }
        </div>
      </div>
    );
  });

  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12} className="text-center py-4">
          <h5 style={wraper}>OUR SOLUTION</h5>
          <p className="text-para">One Platform, Multiple Solutions</p>
        </Col>
      </Row>
      <div className="row">
        <div className=" col-md-6 d-none d-md-block">
          <img
            className="content"
            src={`${items[activeIndex].image}`}
            style={{
              height: '400px',
              width: '500px',
            }}
            alt="img"
          />
        </div>
        <div className=" col-md-6">
          <div className="">
            {renderedItems}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
