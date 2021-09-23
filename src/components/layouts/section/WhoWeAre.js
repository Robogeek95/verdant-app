import { Row, Col } from 'react-bootstrap';
import { Cart4, ChevronRight, CurrencyDollar, Eye, Lock } from 'react-bootstrap-icons';
import { Clock } from 'react-bootstrap-icons';
import ImageHome from '../../images/homepage-multi-icons.png'


const WhoWeAre = () => {
  return (
    <>
      <Row className="pb-4">
        <Col sm={12} md={12} lg={12}>
          <h5 className="ourProduct">Remittance Problems</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6} className="">
          <div className="row">
            <div className="col-md-6">
              <div className=" card card-outline-primary mb-4 mt-2">
                <div className="remittanc-icon">
                  <Clock size={40} className="text-primary bg-white rounded-circle"/>
                </div>
                <h5 className="text-primary text-center py-4 mt-2">Speed</h5>
                <div className="bg-primary card-body">
                  <p className="text-white text-center">Can take up to 5 days to receive cash</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                <div className="remittanc-icon">
                  <CurrencyDollar size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Cost</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white text-center">Fees and FXcan cost up to 14%</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Cart4 size={40} className="text-primary remittanc-icon" />
                  
                  </div>
                  <h5 className="text-primary text-center py-4">Convenience</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Recipients have tophysically travel toremittance location to getcash and travel toindividual payment locations to pay bills</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Lock size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Safety</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Physically carrying cashin common remittance destinations is dangerous</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Eye size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Transparency</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Remittance Fees and FX Rates are not made clear to senders</p>
                  </div>
                </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h5 className="ourProduct">
              Traditional Money Transfers
            </h5>
            <p className="product-text">
              Despite these problems, Traditional Remittance continues to
              be utilized by the underbanked and unbanked population due 
              to familiarity and lack of viable alternatives.
            </p>
            <div className="text-center">
                <img src={ImageHome} alt="Multi-icons-home img-fluid"  />
            </div>
          </div>
        </Col>
      </Row> 
    </>
  )
}


export default WhoWeAre
