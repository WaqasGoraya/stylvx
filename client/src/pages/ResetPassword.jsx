import {useState} from 'react'
import { createPortal } from 'react-dom';
import LoginModal from "./LoginModal"
import { resetPasswordSchema } from '../formValidations/Schema';
import {useFormik} from 'formik'
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialValues = {
    password: '',
    password_confirm: ''
  }
const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    const {id,token} = useParams();
    const navigate = useNavigate()
    const { values, errors,  handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values,{resetForm}) => {
          try {
            setLoading(true)
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/reset-password/${id}/${token}`, values);
            if(response.data && response.data.status === 'success'){
                resetForm();
                toast.success(response.data.message)
                setShowModal(true);
                // navigate('/')
            }else{
              toast.error(response.data.message);
            }
            setLoading(false);
          } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setLoading(false);
          }
          
        }
    });
  return (
    <>
    <div className="signup-div">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9 col-lg-7 mx-auto">
          <div className="signup-center-div mt-5 mb-5">
            <h1 className="register-signup">Reset Password</h1>
            {/* <h6 className="create-register">Create an Account</h6> */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container-signup gap-0">
                  <i className="far fa-user" aria-hidden="true"></i>
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
                  <i className="far fa-envelope" aria-hidden="true"></i>
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
              <br />
              <button
                type="submit"
                className="btn btn-primary mt-4 modal-btn-login"
                disabled={loading}
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
    </div>
    {showModal && createPortal(<LoginModal handleClose={handleCloseModal} />,document.body)}
    </>
  )
}

export default ResetPassword