import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useAuth } from "../context/authContext";
import { EditProfileSchema } from "../formValidations/Schema";
import ShowImage from "../components/Images/ShowImage";
import Spiner from "../components/Loader/Spiner";

const UserDashboard = () => {
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const id = auth?.user?.id || "";
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/detail/${id}`,
          { withCredentials: true }
        );
        if (data.user) {
          const userData = data.user;
          setInitialValues({
            firstname: userData.firstname || "",
            lastname: userData.lastname || "",
            email: userData.email || "",
            image: userData.image || "",
          });
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        setLoading(false);
      }
    };
    getUser();
  }, []);
  const formik = useFormik({
    initialValues: initialValues || {
      firstname: "",
      lastname: "",
      email: "",
      image: "",
    },
    enableReinitialize: true,
    validationSchema: EditProfileSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/profile/edit/${id}`,
          values,
          { withCredentials: true }
        );
        if (data.status === "success") {
          toast.success(data.message);
        } else {
          toast.error("Unable to update user");
        }
      } catch (error) {
        toast.error("Something went wrong!", error.response.data.message);
        setLoading(false);
      }
    },
  });
  if (loading || !initialValues) {
    return <Spiner />;
  }
  return (
    <>
      <div className="col-lg-9">
        <div className="right-content mt-3 mb-5">
          <div className="user-management text-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="profileimgage-outer p-3 position-relative">
                <ShowImage
                  imagePath={formik.values.image}
                  className={"img-fluid"}
                />
                <img
                  className="img-fluid"
                  src="/images/change-profile-img.png"
                  alt=""
                />
                <div className="upload-image-outer position-absolute mb-3">
                  <input
                    className="file-input"
                    type="file"
                    name="image"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "image",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <label htmlFor="formFile" className="file-label">
                    <img
                      className="w-100"
                      src="/images/image-upload-icon.png"
                      alt="Upload Icon"
                    />
                  </label>
                </div>
              </div>
              <div className="frm-outer rounded-5 mx-md-5 mx-0">
                <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                    <label htmlFor="">FirstName</label>
                    <input className="form-control" type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                    {formik.errors.firstname && (
                          <div className="text-sm text-danger">
                            {formik.errors.firstname}
                          </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                    <label htmlFor="">LastName</label>
                    <input className="form-control" type="text" name="lastname" value={formik.values.lastname} onChange={formik.handleChange}/>
                    {formik.errors.lastnamestname && (
                          <div className="text-sm text-danger">
                            {formik.errors.lastname}
                          </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                    <label htmlFor="">Email ID</label>
                    <input className="form-control" type="email" name="email" value={formik.values.email} readOnly />
                  </div>
                </div>
                <div className="user-detail-submit-button text-center py-5">
                  <button className="bg-black border-0  px-5 py-2 text-white" type="submit" disabled={loading}>
                    Submit
                  </button>
                </div>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
