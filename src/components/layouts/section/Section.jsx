import React from 'react';
import OurProduct from './OurProduct';
import HowWeSolve from './HowWeSolve';
import WhoWeAre from './WhoWeAre';
import HowItWorks from './HowItWorks';
import LatestProducts from './LatestProducts';

const Section = () => (
  <>
    <div className="py-3">
      <WhoWeAre />
    </div>

    <div className="py-3">
      <HowWeSolve />
    </div>

    <div className="py-3">
      <OurProduct />
    </div>

    {/* <div className="py-2">
        <OurSolution items={items} />
      </div> */}

    <div className="py-5">
      <HowItWorks />
    </div>

    <div className="py-5">
      <LatestProducts />
    </div>
  </>
);

export default Section;
