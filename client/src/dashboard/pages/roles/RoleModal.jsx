import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik, Formik, Field, Form } from "formik";
import MultiSelectDropDown from "./Selector";
import toast from "react-hot-toast";
const RoleModal = ({ close }) => {
  const [permissions, setPermissions] = useState([]);
  // const [selectpermissions, setSelectedpermissions]=useState();
  const [loading,setLoading] = useState(false);
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
          setPermissions(data.permissions);
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
  const initialValues = {
    roleName: "",
    permissions: [],
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      setLoading(true)
      // setFieldValue(values?.permissions);
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/roles/add`,values,{withCredentials:true});
        if(res.data.status === 'success'){
          
          toast.success('Role added Success!');
          close()
        }
      } catch (error) {
        toast.error('Unable to create role!')
      }finally{
        setLoading(false)
      }
    },
  });
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
            <h4 className="modal-title">Add New Role</h4>
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
                      className="form-control w-100 py-2 rounded-3 px-3"
                      type="text"
                      name="roleName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                    <label htmlFor="permissions">Permission</label>
                    <MultiSelectDropDown
                      options={permissions.map((permission) => ({
                        label: permission.name,
                        value: permission._id,
                      }))}
                      name="permissions"
                      value={values.permissions}
                          onChange={(selectedOptions) =>
                          
                            setFieldValue(
                              "permissions",
                              selectedOptions.map((option) => option.value)
                            )
                          }
                    />
                  </div>
                </div>
                <div className="user-detail-submit-button text-center py-5">
                  <button
                    type="submit"
                    className="bg-black border-0  px-5 py-2 text-white"
                    disabled={loading}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RoleModal;
