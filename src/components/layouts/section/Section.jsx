import React from 'react';
import OurProduct from './OurProduct';
import HowWeSolve from './HowWeSolve';
import WhoWeAre from './WhoWeAre';
import HowItWorks from './HowItWorks';
import LatestProducts from './LatestProducts';
import { Container } from 'react-bootstrap';

const Section = () => (
  <>
    <Container className="py-3">
      <WhoWeAre />
    </Container>

    <div className="py-3">
      <HowWeSolve />
    </div>

    <Container className="py-3">
      <OurProduct />
    </Container>

    {/* <div className="py-2">
        <OurSolution items={items} />
      </div> */}

    <Container className="py-5">
      <HowItWorks />
    </Container>

    <Container className="py-5">
      <LatestProducts />
    </Container>
  </>
);

export default Section;
