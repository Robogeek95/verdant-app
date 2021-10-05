import React from "react";
import OurProduct from "./OurProduct";
import HowWeSolve from "./HowWeSolve";
import WhoWeAre from "./WhoWeAre";
import HowItWorks from "./HowItWorks";
import LatestProducts from "./LatestProducts";
import { Container } from "react-bootstrap";
import Slider from "../Slider";

const Section = () => (
  <>
    <Slider />
    <Container className="py-3" id="whoWeAre">
      <WhoWeAre />
    </Container>

    <div className="py-5">
      <HowWeSolve />
    </div>

    <Container className="py-3" id="OurProduct">
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
