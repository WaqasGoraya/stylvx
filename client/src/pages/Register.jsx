import {useState} from 'react'
import { createPortal } from 'react-dom';
import LoginModal from "./LoginModal"
import { registerSchema } from '../formValidations/Schema';
import {useFormik} from 'formik'
import { Link } from 'react-router-dom';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirm: ''
}

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  // formik
  const { values, errors,  handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        setLoading(true)
        console.log(values)
      }
  });
  return (
    <>
<div className="signup-div">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9 col-lg-7 mx-auto">
          <div className="signup-center-div mt-5 mb-5">
            <h1 className="register-signup">Register</h1>
            <h6 className="create-register">Create an Account</h6>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-5">
                <div className="input-container-signup gap-0">
                  <i className="far fa-user input-icon" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control form-input-modal"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="First Name"
                  />
                </div>
                {errors.firstname && <div className="text-sm text-danger">{errors.firstname}</div>}
                <br/>
              </div>
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="far fa-user" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control form-input-modal"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name"
                  />
                </div>
                {errors.lastname && <div className="text-sm text-danger ">{errors.lastname}</div>}
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="far fa-envelope" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="form-control form-input-modal"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email Address"
                  />
                </div>
                {errors.email && <div className="text-sm text-danger ">{errors.email}</div>}
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="form-control form-input-modal"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                  />
                </div>
                {errors.password && <div className="text-sm text-danger ">{errors.password}</div>}
              </div>
              <br />
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="form-control form-input-modal"
                    name="password_confirm"
                    value={values.password_confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.password_confirm && <div className="text-sm text-danger ">{errors.password_confirm}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 modal-btn-login"
                disabled={loading}
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 already-signup">
              Already have an account?
              <Link to="#" className="text-login-signup" data-bs-target="#exampleModal" onClick={handleShowModal}>Login </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {showModal && createPortal(<LoginModal handleClose={handleCloseModal} />,document.body)}
    </>
  )
}

export default Register