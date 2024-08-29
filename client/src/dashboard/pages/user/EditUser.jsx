import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { EditUserSchema } from "../../../formValidations/Schema";
import Spiner from "../../../components/Loader/Spiner";

const EditUser = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [userRoles, setUserRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/${id}`,
          { withCredentials: true }
        );
        const rolesRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/roles`,
          { withCredentials: true }
        );

        if (userRes.data.status === "success" && rolesRes.data.status === "success") {
          const userData = userRes.data.user;
          setInitialValues({
            firstname: userData.firstname || "",
            lastname: userData.lastname || "",
            email: userData.email || "",
            role: userData.role[0].toString() || "",
          });
          setUserRoles(rolesRes.data.roles);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
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
      role: "",
    },
    enableReinitialize: true,
    validationSchema: EditUserSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/user/${id}`,
          values,
          { withCredentials: true }
        );
        if (data.status === "success") {
          toast.success(data.message);
          navigate('/dashboard/users');
        } else {
          toast.error("Unable to update user");
        }
      } catch (error) {
        toast.error("Something went wrong!");
        setLoading(false);
      }
    },
  });

  if (loading || !initialValues) {
    return <Spiner />;
  }

  return (
    <div className="col-lg-9">
      <div className="right-content mt-3 mb-5">
        <div className="user-management text-center">
          <h4 className="p-3 fw-bold text-uppercase">User Detail </h4>
          <div className="frm-outer rounded-5 mx-md-5 mx-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="row gy-5 justify-content-center align-items-center justify-content-between p-2">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstname && (
                    <div className="text-sm text-danger">{formik.errors.firstname}</div>
                  )}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="lastname">LastName</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastname && (
                    <div className="text-sm text-danger">{formik.errors.lastname}</div>
                  )}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    readOnly
                  />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start px-3">
                  <label htmlFor="role">Role</label>
                  <select
                    className="form-select"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled>Select Role</option>
                    {userRoles?.map((role) => (
                      <option key={role._id} value={role._id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                  {formik.errors.role && (
                    <div className="text-sm text-danger">{formik.errors.role}</div>
                  )}
                </div>
              </div>
              <div className="user-detail-submit-button text-center py-5">
                <button
                  className="bg-black border-0 px-5 py-2 text-white"
                  type="submit"
                  disabled={loading}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
