/* eslint-disable react/prop-types */
import React from "react";
// import { BsXLg } from 'react-icons/bs'
import { LinkContainer } from "react-router-bootstrap";
import Forgetlogo from "./images/forgetlogo.png";
import Logo from "./images/confirmforgot.png";



const ForgetSuccess = ({showModal, setShowModal}) => {

  return (
    <>
    {showModal ? 
    <div className = 'jjj'>
    <div className="d-flex justify-content-center modal" >
      <div className="row">
        <div className="col">
          <div className=" p-5 ">
            <div className="d-flex  justify-content-center">
              <div>
                <img src={Forgetlogo} alt="Brand Logo" />
              </div>
             
             <div className = 'cancel'>
                <div className = 'Cancel' onClick = { () => setShowModal(prev => !prev)}>X</div>
             </div>
            </div>
            <div className="d-flex pt-5  justify-content-center">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
             
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
              Check your Mail
              </p>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
              We have sent password recovery instructions to your email
              </p>
            </div>
<div className="mb-5">
              <LinkContainer to="/login">
                <input
                  className="btn btn-primary btn-block btn-lg"
                  type="submit"
                  value="Back to Login"
                />
                </LinkContainer>
               
              </div>

             
            

            <div className="mt-5" />
            <div className="mt-5" />
          </div>
        </div>
      </div>
    </div>
    </div>
    : null}
    </>
  );
};

export default ForgetSuccess;
