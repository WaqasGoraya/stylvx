import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { PermissionSchema } from "../../../formValidations/Schema";
import toast from "react-hot-toast";
import Spiner from "../../../components/Loader/Spiner";

const PermissionModal = ({ close, onUpdate, permission }) => {
  const [loading, setLoading] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-main")) {
      close();
    }
  };

  const initialValues = {
    name: permission?.name || ""
  };

  const { errors, values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: PermissionSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (permission) {
          // Edit permission
          const { data } = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/permission/update/${permission._id}`,
            values,
            { withCredentials: true }
          );
          if (data.status === "success") {
            onUpdate();
            toast.success(data.message);
            close();
          }
        } else {
          // Add new permission
          const { data } = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/permission/add`,
            values,
            { withCredentials: true }
          );
          if (data.status === "success") {
            onUpdate();
            toast.success(data.message);
            close();
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }
  });

  if (loading) {
    return <Spiner />;
  }

  return (
    <div className="role-permission-section">
      <div className="container">
        <div
          className="modal show modal-main"
          id="PerModal"
          style={{ display: "block" }}
          onClick={handleOutsideClick}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content w-100">
              {/* Modal Header */}
              <div className="modal-header bg-light">
                <h4 className="modal-title">
                  {permission ? "Edit Permission" : "Add Permission"}
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
                    <div className="row gy-4 justify-content-center align-items-center p-2">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                        <label htmlFor="permission-name">Name</label>
                        <input
                          className="form-control w-100 py-2 rounded-3 px-3"
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.name && (
                        <div className="text-sm text-danger">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="user-detail-submit-button text-center py-5">
                      <button
                        type="submit"
                        className="bg-black border-0 px-5 py-2 text-white"
                        disabled={loading}
                      >
                        {permission ? "Update" : "Submit"}
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

export default PermissionModal;
