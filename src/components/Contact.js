import React from 'react'
import underline from './images/underline.png'
import contactImg1 from './images/contact-img1.png'
import contactImg2 from './images/contact-img2.png'
import contactImg3 from './images/contact-img3.png'

const Contact = () => {
  return (
    <div className="py-5">
      <div className="container-login">
        <div className="left">
          <div className="login-form">
            <div>            
              <h2 className="text-primary" style={{ fontSize: '32.35', fontWeight: '700', marginBottom: '0px'}}>Contact Us</h2>
              <div className="ml-4">
                <img size={5} src={underline} alt="Contact Us Underline" style={{ width: '200px' }}/>
              </div>
            </div>
            <div className="text-dark mt-5 mb-3">
              <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: '23.5px' }}>We are always ready to hear from you! How can we help? Do leave us a message.</p>
            </div>
            <form action="" className="form">
              <div className="form-group">
                <label htmlFor="full-name">Full Name</label>
                <input className="full-name" type="text" id="full-name" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="email" type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <textarea className="message" name="message" id="messag">
                  Message
                </textarea>
              </div>
              
              <div className="text-center mb-5">
                <input className="btn btn-primary btn-lg" type="submit" value="Send" style={{ width: '60%' }} />
              </div>

              <p style={{ fontSize: '16ox', lineHeight: '23.5px' }}>For further enquiries, you can contact us at, <strong>7b Ondo Street, Osborne Foreshore Estate Ikoyi</strong>. Or call <strong>07017808188</strong></p>
              
            </form>
          </div>
        </div>
        <div className="right">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
              <div className="pl-3">
                <img src={contactImg1} alt="Contact US photo 1" />
              </div>
              <div>
                <div style={{ marginLeft: '-30px' }}>
                  <img src={contactImg2} alt="Contact US photo 2" />
                </div>
                <div style={{ marginLeft: '-60px' }}>
                  <img src={contactImg3} alt="Contact US photo 3" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
