import React from 'react'

const Register = () => {
  return (
    <>
<div className="signup-div">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9 col-lg-7 mx-auto">
          <div className="signup-center-div mt-5 mb-5">
            <h1 className="register-signup">Register</h1>
            <h6 className="create-register">Create an Account</h6>
            <form>
              <div className="form-group mt-5">
                <div className="input-container-signup gap-0">
                  <i className="far fa-user input-icon" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control form-input-modal"
                    id="exampleInputEmail1"
                    required
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                </div>
                <br />
              </div>
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="far fa-user" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control form-input-modal"
                    id="exampleInputPassword1"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="far fa-envelope" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="form-control form-input-modal"
                    id="exampleInputPassword1"
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="form-control form-input-modal"
                    id="exampleInputPassword1"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="form-control form-input-modal"
                    id="exampleInputPassword1"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 modal-btn-login"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 already-signup">
              Already have an account?
              <a href="#" className="text-login-signup" data-bs-toggle="modal" data-bs-target="#exampleModal">Login </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Register