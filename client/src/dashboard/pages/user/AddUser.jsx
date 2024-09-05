import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Spiner from "../../../components/Loader/Spiner";
import toast from "react-hot-toast";
import { AddUserSchema } from "../../../formValidations/Schema";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRoles = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/roles/`,
          { withCredentials: true }
        );
        if (data.status === "success") {
          setUserRoles(data.roles);
        }
      } catch (error) {
        toast.error("Failed to fetch roles data");
      } finally {
        setLoading(false);
      }
    };
    getRoles();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      role: "",
    },
    validationSchema: AddUserSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/add`,
          values,
          { withCredentials: true }
        );
        if (data.status === "success") {
          toast.success(data.message);
          navigate("/dashboard/users");
        } else {
          toast.error("Unable to create user");
        }
      } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
  });

  if (loading) {
    return <Spiner />;
  }

  return (
    <div className="col-lg-9">
      <div className="right-content mt-3 mb-5">
        <div className="user-management text-center">
          <h4 className="p-3 fw-bold text-uppercase">Add New User</h4>
          <div className="frm-outer rounded-5 mx-md-5 mx-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstname && (
                    <div className="text-sm text-danger">
                      {formik.errors.firstname}
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="lastname">LastName</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastname && (
                    <div className="text-sm text-danger">
                      {formik.errors.lastname}
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && (
                    <div className="text-sm text-danger">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="role">Role</label>
                  <select
                    className="form-select"
                    name="role"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select Role</option>
                    {userRoles.map((role) => (
                      <option key={role._id} value={role._id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.role && (
                    <div className="text-sm text-danger">
                      {formik.errors.role}
                    </div>
                  )}
                </div>
              </div>
              <div className="user-detail-submit-button text-center py-5">
                <button
                  className="bg-black border-0 px-5 py-2 text-white"
                  type="submit"
                  disabled={loading}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
