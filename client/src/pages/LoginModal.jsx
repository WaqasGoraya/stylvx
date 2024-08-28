import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { loginSchema } from '../formValidations/Schema';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from "../context/authContext"
import { createPortal } from 'react-dom';
import ForgotPasswordModal from './ForgotPasswordModal';
import rolesModel from '../../../server/models/roles';

const initialValues = {
    email:"",
    password:""
}

const LoginModal = ({ handleClose }) => {
    const [showForgotModal, setShowForgotModal] = useState(false);

    const handleShowModal = () => {
        setShowForgotModal(true);
        
    }

    const handleOutsideClick = (e) => {
        if (e.target.className.includes('main-modal-div')) {
            handleClose();
        }
    };
    const [loading, setLoading] = useState(false)
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async(values) => {
            try {
                setLoading(true)
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,values, {withCredentials:true});
                if(response.data && response.data.status === 'Success'){
                 
                    setAuth({
                        ...auth,
                        user:response.data.user
                    });
                    localStorage.setItem('auth',JSON.stringify(response.data));
                    const role = response.data.user.role;
                    const roleName=   role.map(role =>  role.name)
                    console.log(roleName[0])
                    if(roleName[0] == 'admin'){
                        navigate('/dashboard/admin')
                    }else{
                        navigate('/')
                    }
                    handleClose()
                    toast.success(response.data.message)

                }else{
                    toast.error(response.data.message)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
                toast.error('Something went wrong!')
                setLoading(false);
            }
        }
    });
    const handleGoogleLogin = async () => {
        window.open(
          `${import.meta.env.VITE_BASE_URL_SERVER}/auth/google`,
          "_self"
        );
      }
    return (
        <>
        <div
            className="modal show main-modal-div"
            id="LoginModal"
            tabIndex="-1"
            aria-labelledby="LoginModalLabel"
            aria-hidden="true"
            style={{ display: 'block' }}
            onClick={handleOutsideClick}  // Attach click event here
        >
            <div className="modal-dialog modalCenter" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className='mymodal-login' id="LoginModal">
                        {/* Modal content here */}
                        <div className="row gx-3">
                            {/* Left side content */}
                            <div className="col-sm-12 col-md-12 col-lg-6  modal-stylvix d-flex align-items-center justify-content-center">
                                <div className='modal-inner-div'>
                                    <h1 className='text-white modal-txt-stylvix text-center mb-2'>STYLVIX</h1>
                                    <h4 className='text-white mt-2 text-center'>JOIN MY STYLVIX</h4>
                                    <ul className='text-white mt-2 modal-ul-login'>
                                        <li>Discover latest fashion trends</li>
                                        <li>Build your Wishlist and collection</li>
                                        <li>Set your sale alerts</li>
                                        <li>Enjoy a personalized search experience</li>
                                        <li>Compare prices across stores</li>
                                        <li>Share your fashion outfits</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Right side content */}
                            <div className="col-sm-12 col-md-12 col-lg-6 modal-stylvix1 bg-white d-flex align-items-center justify-content-center">
                                <div className="text-center modal-div2-login">
                                    <div className="modal-header modal-close modal-close-btn">
                                        <button type="button" className="btn mt-0" onClick={handleClose}> 
                                        <svg width="16" className="close-svg-black" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.522 15.2735C14.1844 15.6111 13.7266 15.8007 13.2492 15.8007C12.7718 15.8007 12.314 15.6111 11.9765 15.2735L7.99996 10.7285L4.02346 15.272C3.85681 15.4414 3.65828 15.5761 3.43932 15.6684C3.22035 15.7607 2.98528 15.8087 2.74767 15.8096C2.51006 15.8106 2.27461 15.7645 2.0549 15.674C1.83519 15.5836 1.63557 15.4505 1.46755 15.2825C1.29953 15.1144 1.16644 14.9148 1.07596 14.6951C0.985477 14.4754 0.93939 14.2399 0.940358 14.0023C0.941325 13.7647 0.989328 13.5297 1.0816 13.3107C1.17387 13.0917 1.30858 12.8932 1.47796 12.7265L5.61496 8.00155L1.47646 3.27355C1.30708 3.1069 1.17237 2.90837 1.0801 2.6894C0.987828 2.47044 0.939825 2.23537 0.938858 1.99776C0.93789 1.76015 0.983978 1.5247 1.07446 1.30499C1.16494 1.08528 1.29803 0.885655 1.46605 0.717637C1.63407 0.54962 1.83369 0.416531 2.0534 0.326048C2.27311 0.235564 2.50856 0.189477 2.74617 0.190445C2.98378 0.191412 3.21885 0.239415 3.43782 0.331685C3.65678 0.423954 3.85531 0.558665 4.02196 0.728045L7.99996 5.27454L11.9765 0.728045C12.1431 0.558665 12.3416 0.423954 12.5606 0.331685C12.7796 0.239415 13.0146 0.191412 13.2522 0.190445C13.4899 0.189477 13.7253 0.235564 13.945 0.326048C14.1647 0.416531 14.3643 0.54962 14.5324 0.717637C14.7004 0.885655 14.8335 1.08528 14.924 1.30499C15.0144 1.5247 15.0605 1.76015 15.0596 1.99776C15.0586 2.23537 15.0106 2.47044 14.9183 2.6894C14.826 2.90837 14.6913 3.1069 14.522 3.27355L10.385 8.00155L14.522 12.7265C14.6893 12.8937 14.8221 13.0922 14.9127 13.3108C15.0032 13.5293 15.0499 13.7635 15.0499 14C15.0499 14.2366 15.0032 14.4708 14.9127 14.6893C14.8221 14.9079 14.6893 15.1064 14.522 15.2735Z" fill="black"></path></svg>
                                        <svg width="16" height="16" className="close-svg-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.522 15.2735C14.1844 15.6111 13.7266 15.8007 13.2492 15.8007C12.7718 15.8007 12.314 15.6111 11.9765 15.2735L7.99996 10.7285L4.02346 15.272C3.85681 15.4414 3.65828 15.5761 3.43932 15.6684C3.22035 15.7607 2.98528 15.8087 2.74767 15.8096C2.51006 15.8106 2.27461 15.7645 2.0549 15.674C1.83519 15.5836 1.63557 15.4505 1.46755 15.2825C1.29953 15.1144 1.16644 14.9148 1.07596 14.6951C0.985477 14.4754 0.93939 14.2399 0.940358 14.0023C0.941325 13.7647 0.989328 13.5297 1.0816 13.3107C1.17387 13.0917 1.30858 12.8932 1.47796 12.7265L5.61496 8.00155L1.47646 3.27355C1.30708 3.1069 1.17237 2.90837 1.0801 2.6894C0.987828 2.47044 0.939825 2.23537 0.938858 1.99776C0.93789 1.76015 0.983978 1.5247 1.07446 1.30499C1.16494 1.08528 1.29803 0.885655 1.46605 0.717637C1.63407 0.54962 1.83369 0.416531 2.0534 0.326048C2.27311 0.235564 2.50856 0.189477 2.74617 0.190445C2.98378 0.191412 3.21885 0.239415 3.43782 0.331685C3.65678 0.423954 3.85531 0.558665 4.02196 0.728045L7.99996 5.27454L11.9765 0.728045C12.1431 0.558665 12.3416 0.423954 12.5606 0.331685C12.7796 0.239415 13.0146 0.191412 13.2522 0.190445C13.4899 0.189477 13.7253 0.235564 13.945 0.326048C14.1647 0.416531 14.3643 0.54962 14.5324 0.717637C14.7004 0.885655 14.8335 1.08528 14.924 1.30499C15.0144 1.5247 15.0605 1.76015 15.0596 1.99776C15.0586 2.23537 15.0106 2.47044 14.9183 2.6894C14.826 2.90837 14.6913 3.1069 14.522 3.27355L10.385 8.00155L14.522 12.7265C14.6893 12.8937 14.8221 13.0922 14.9127 13.3108C15.0032 13.5293 15.0499 13.7635 15.0499 14C15.0499 14.2366 15.0032 14.4708 14.9127 14.6893C14.8221 14.9079 14.6893 15.1064 14.522 15.2735Z" fill="white"></path></svg>
                                        </button>
                                    </div>
                                    <div className='modal-login-div'>
                                        <h3 className='modal-txt-login'>Login</h3>
                                        <p><span className='text-dark fw-bold'>Welcome!</span> Create an account to start your shopping experience.</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mb-3">
                                                <div className="input-container-modal gap-0">
                                                    <i className="fa fa-envelope input-icon" aria-hidden="true"></i>
                                                    <input type="email" className="form-control form-input-modal" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="Enter Address" />
                                                </div>
                                                {errors && <div className="text-danger">{errors.email}</div>}
                                            </div>
                                            <div className="form-group mb-0">
                                                <div className="input-container-modal gap-0">
                                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                                    <input type="password" className="form-control form-input-modal" name="password" onChange={handleChange} onBlur={handleBlur} placeholder="Password" />
                                                </div>
                                                {errors && <div className="text-danger">{errors.password}</div>}
                                            </div>
                                            <div className="form-group d-flex justify-content-between mt-1 txt-forgott-pass">
                                                <div className="form-check text-start">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                                    <label className="form-check-label" htmlFor="gridCheck1">
                                                        Remember Password
                                                    </label>
                                                </div>
                                                <Link to='#' onClick={handleShowModal} className='txt-forgot-pass'>Forgot Password</Link>
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-2 modal-btn-login" disabled={loading}>Login</button>
                                        </form>
                                    </div>
                                    <h6 className='mt-2 txt-or-modal'>OR</h6>
                                    <h5 className='mt-2 txt-sign-modal'>Sign in with</h5>
                                    <ul className='d-flex ul-modal-socialicon gap-3 p-0 mt-4'>
                                        <li><Link to='#' onClick={handleGoogleLogin}><img src='/images/googleicon.png' alt="Google Icon"/></Link></li>
                                        <li><Link to='#'><img src='/images/facebookicon.png' alt="Facebook Icon"/></Link></li>
                                    </ul>
                                    <h6 className='txt-account-modal mb-4'>Don’t have an account? <span><Link to='/register' className='txt-register-modal' onClick={handleClose}>Register</Link></span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {showForgotModal && createPortal(<ForgotPasswordModal close={handleClose} />,document.body)}
         </>
    );
}

export default LoginModal;
