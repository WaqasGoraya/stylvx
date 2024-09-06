import { useState } from "react";
import axios from 'axios';
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";
import Spiner from "../../components/Loader/Spiner";
import { ChangePasswordSchema } from "../../formValidations/Schema";
import  useLogout  from "../../hooks/useLogout";

const ChangePassword = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const id = auth?.user?.id || "";
  const logout = useLogout();
  const initialValues = {
    oldpassword: "",
    newpassword: "",
    confirm_newpassword:""
  }
  const {values,errors,handleChange,handleSubmit, resetForm} = useFormik({
    initialValues: initialValues,
    validationSchema: ChangePasswordSchema,
    onSubmit:async(values)=>{
      setLoading(true);
      try {
        const {data} = await axios.put(`${import.meta.env.VITE_BASE_URL}/change-password/${id}`,values,{withCredentials:true});
        toast.success(data.message);
        resetForm();
        logout();
      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        setLoading(false)
      }
    }
  });
  if (loading) {
    return <Spiner />;
  }
  return (
    <>
  <div className="col-lg-9">
          <div className="right-content mt-3 mb-5">
            <div className="user-management text-center">
              <h4 className="p-3 fw-bold text-uppercase">Change password</h4>
              <div className="frm-outer rounded-5 mx-md-5 mx-0">
                <form onSubmit={handleSubmit}>
                  <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">Old password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password" name="oldpassword" onChange={handleChange}/>
                      {errors.oldpassword && (
                      <div className="text-sm text-danger">
                        {errors.oldpassword}
                      </div>
                    )}
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">New password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password" name="newpassword" onChange={handleChange}/>
                      {errors.newpassword && (
                      <div className="text-sm text-danger">
                        {errors.newpassword}
                      </div>
                    )}
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                      <label htmlFor="">Confirm New password</label>
                      <input className="w-100 py-2  rounded-3 px-3 form-control" type="password" name="confirm_newpassword" onChange={handleChange}/>
                      {errors.confirm_newpassword && (
                      <div className="text-sm text-danger">
                        {errors.confirm_newpassword}
                      </div>
                    )}
                    </div>
                    <div className="user-detail-submit-button text-center py-5">
                      <button className="bg-black   px-5 py-2 text-white" type="submit" disabled={loading}>Submit</button>
                    </div>
                    </div>
                </form>
                <div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  );
};

export default ChangePassword;
