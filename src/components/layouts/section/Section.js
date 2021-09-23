import OurProduct from './OurProduct';
import WhoWeAre from './WhoWeAre'
import OurSolution from './OurSolution'
import HowItWorks from './HowItWorks';
import { Route } from 'react-router-dom';
import image1 from '../../images/partnerships.png'
import image2 from '../../images/solution2.png'
import image3 from '../../images/solution3.png'
import image4 from '../../images/solution4.png'
import LatestProducts from './LatestProducts';

const Section = () => {
  const items = [
  {
    title: "Exclusive Partnerships",
    content: "Through exclusive partnerships we offer you the best deals",
    image: image1,
    id: "1"
  },
  {
   title: "Technology Integration",
    content: "We provide the easiest solution through deep technology integration.",
    image: image2,
    id: "2"
  },
  {
   title: "Over 100,000 Merchant locations",
    content: "We have over 100,000 Merchant locations across the country, including all Shoprite, Spar outlets, and other local supermarket brands.",
    image: image3,
    id: "3"
  },
  {
   title: "Easy Remittance",
    content: "Instead of focusing on improving traditional cash remittance, We created a product and platform that makes cash remittance easier.",
    image: image4,
    id: "4"
  },
];

  
  return (
    <>
      <div className="py-3">
      <WhoWeAre />
      </div>
      <div className="py-3">
        <OurProduct />
      </div>
      <div className="py-2">
        <OurSolution items={items} />
      </div>
      <div className="py-5">
        <HowItWorks/>
      </div>

      <div className="py-5">
        <LatestProducts />
      </div>
    </>
  )
}

export default Section;
