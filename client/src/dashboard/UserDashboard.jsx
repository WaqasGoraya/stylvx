import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useAuth } from "../context/authContext";
import { EditProfileSchema } from "../formValidations/Schema";
import Spiner from "../components/Loader/Spiner";
import ShowImage from "../components/Images/ShowImage";

const UserDashboard = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const id = auth?.user?.id || "";
  const [preview, setPreview] = useState("/images/user.png"); // Default profile image

  // File input reference
  const fileInputRef = useRef(null);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("image", file); // Update Formik's field value
      setPreview(URL.createObjectURL(file)); // Set the preview for the selected image
    }
  };

  // Function to trigger file input click when the label is clicked
  const handleLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the hidden input
    }
  };

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
          // Set image preview to the current image from the backend
          if (userData.image) {
            setPreview(userData.image);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

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
      setLoading(true);
      try {
        const formData = new FormData(); // Create FormData for file upload
        formData.append("firstname", values.firstname);
        formData.append("lastname", values.lastname);
        formData.append("email", values.email);
        if (values.image) {
          formData.append("image", values.image); // Append image if present
        }

        const { data } = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/profile/edit/${id}`,
          formData, // Send FormData
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        if (data.status === "success") {
          toast.success(data.message);
        } else {
          toast.error("Unable to update user");
        }
      } catch (error) {
        toast.error("Something went wrong!", error.response?.data?.message);
      } finally {
        setLoading(false); // Reset loading state after submission
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
                {/* Image Preview */}
                {formik.values.image ? (
                  <>
                    <ShowImage
                      imagePath={formik.values.image}
                      className={"img-fluid"}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="img-fluid"
                      src={preview}
                      alt="Profile Preview"
                    />
                  </>
                )}

                <div
                  className="upload-image-outer position-absolute mb-3"
                  onClick={handleLabelClick}
                >
                  {/* File Input (hidden) */}
                  <input
                    className="file-input"
                    ref={fileInputRef} // Reference to input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, formik.setFieldValue)}
                    style={{ display: "none" }} // Hide default input
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
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.firstname && (
                      <div className="text-sm text-danger">
                        {formik.errors.firstname}
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                    <label htmlFor="">LastName</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.lastname && (
                      <div className="text-sm text-danger">
                        {formik.errors.lastname}
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                    <label htmlFor="">Email ID</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formik.values.email}
                      readOnly
                    />
                  </div>
                </div>

                <div className="user-detail-submit-button text-center py-5">
                  <button
                    className="bg-black border-0  px-5 py-2 text-white"
                    type="submit"
                    disabled={loading}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
