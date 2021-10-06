import React from 'react'
import Forgetlogo from "./images/forgetlogo.png";
import { useState } from 'react';

const ResetPass = () => {

    // const newPass = (e) =>{
    //     e.value
    // }
    // const confirmPass = (e) =>{
    //     e.value
    // }

    const [newPass, setnewPass] = useState()
    const [confPass, setconfPass] = useState()


    
    const handleSubmit = () =>{
        if (newPass === confPass) {
            console.log('password match')
        }
        else{
            console.log('password does not match ' )
        }


    }

    return (
        <div className="">
      <div className="row col jsjs">
        <div className="col-lg-5 col-md-10 col-sm-12">
          <div className=" pt-5 ">
            <div className="d-flex  justify-content-center">
              <div>
                <img src={Forgetlogo} alt="Brand Logo" />
              </div>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Reset Your Password
              </p>
            </div>

            <form className="form" onSubmit = {handleSubmit}>
              <div className="form-group">
                <label htmlFor="password">Temporary Password</label>
                <input
                  className="password"
                  type="text"
                  id="tempPass"
                  placeholder="Enter your Temporary Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  className="password"
                  type="password"
                  value = {newPass}
                  onChange = {(e) => setnewPass(e.target.value)}
                  id="newPass"
                  placeholder="Enter your new Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  className="password"
                  type="password"
                  value = {confPass}
                  onChange = {(e) => setconfPass(e.target.value)}

                  id="conFirmPass"
                  placeholder="Confirm your Password"
                />
              </div>

              <div className="mb-5">
                <input
                  className="btn btn-primary btn-block btn-lg"
                  type="submit"
                  value="Reset Password"
                />
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
    )
}

export default ResetPass
