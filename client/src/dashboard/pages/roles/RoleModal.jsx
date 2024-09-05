import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { RolesSchema } from "../../../formValidations/Schema";
import MultiSelect from "./MultiSelect";

const RoleModal = ({ close, onUpdate, role }) => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const isEditMode = !!role; // Check if it's edit mode by checking if the role prop is passed
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("main-modal")) {
      close();
    }
  };

  useEffect(() => {
    const getAllPermissions = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/permissions`,
          { withCredentials: true }
        );
        if (data.status === "success") {
          setPermissions(
            data.permissions.map((permission) => ({
              label: permission.name,
              value: permission._id,
            }))
          );
        } else {
          toast.error("Unable to fetch permissions!");
        }
      } catch (error) {
        toast.error("Unable to fetch permissions!");
      } finally {
        setLoading(false);
      }
    };

    getAllPermissions();
  }, []);

  const formik = useFormik({
    initialValues: {
      roleName: role?.name || "", // If role exists, populate its name for editing
      permissions: role?.permissions
        ? role.permissions.map((perm) => ({
            label: perm.name,
            value: perm._id,
          }))
        : [], // Populate permissions when in edit mode, or default to an empty array
    },
    validationSchema: RolesSchema,
    enableReinitialize: true, // Enable form reinitialization when role data is passed
    onSubmit: async (values) => {
      const transformedData = {
        roleName: values.roleName,
        permissions: values.permissions.map((permission) => permission.value), // Extract only the value
      };

      setLoading(true);
      try {
        if (isEditMode) {
          // If it's edit mode, update the role
          const res = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/roles/update/${role._id}`,
            transformedData,
            { withCredentials: true }
          );
          if (res.data.status === "success") {
            toast.success("Role updated successfully!");
            onUpdate();
            close();
          }
        } else {
          // Otherwise, create a new role
          const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/roles/add`,
            transformedData,
            { withCredentials: true }
          );
          if (res.data.status === "success") {
            toast.success("Role added successfully!");
            onUpdate();
            close();
          }
        }
      } catch (error) {
        toast.error(isEditMode ? `Unable to update role! ${error.response.data.message}` : `Unable to create role! ${error.response.data.message}`);
      } finally {
        setLoading(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <div className="role-permission-section">
      <div className="container">
        <div
          className="modal show main-modal"
          id="RoleModal"
          style={{ display: "block" }}
          onClick={handleOutsideClick}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content w-100">
              {/* Modal Header */}
              <div className="modal-header bg-light">
                <h4 className="modal-title">
                  {isEditMode ? "Edit Role" : "Add New Role"}
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={close}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div className="py-3 text-center">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-4 justify-content-center align-items-center justify-content-between p-2">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                        <label htmlFor="roleName">Name</label>
                        <input
                          className={`form-control w-100 py-2 rounded-3 px-3 ${
                            errors.roleName && touched.roleName
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="roleName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.roleName}
                        />
                        {errors.roleName && touched.roleName && (
                          <div className="text-danger">{errors.roleName}</div>
                        )}
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                        <label htmlFor="permissions">Permissions</label>
                        <MultiSelect
                          name="permissions"
                          value={values.permissions}
                          options={permissions}
                          onChange={(permissions) => {
                            setFieldValue("permissions", permissions);
                          }}
                        />
                        {errors.permissions && touched.permissions && (
                          <div className="text-danger">
                            {errors.permissions}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="user-detail-submit-button text-center py-5">
                      <button
                        type="submit"
                        className="bg-black border-0 px-5 py-2 text-white"
                        disabled={loading}
                      >
                        {isEditMode ? "Update Role" : "Add Role"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
