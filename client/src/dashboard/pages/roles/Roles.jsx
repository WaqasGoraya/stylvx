import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Spiner from "../../../components/Loader/Spiner";
import "./Roles.css";
import { createPortal } from "react-dom";
import RolesModal from "./RoleModal";
import PermissionModal from "./PermissionModal";
import confirmDelete from "../../../components/alert/ConfirmDelete";
import { setNestedObjectValues } from "formik";
const Roles = () => {
  const [roles, setRoles] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState(null); // Current permission being edited
  const [selectedRoles, setSelectedRoles] = useState(null); // Current permission being edited
  const [loading, setLoading] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isPermModalOpen, setIsPermModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("rolesTab");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleEditClick = (data, type) => {
    if (type === "permission") {
      setSelectedPermission(data); // Set the selected permission for editing
      setIsPermModalOpen(true);
    }
    if (type === "role") {
      setSelectedRoles(data); // Set the selected permission for editing
      setIsRoleModalOpen(true);
    }
  };

  // Role Modal
  const openRoleModal = () => {
    setSelectedRoles(null);
    setIsRoleModalOpen(true);
  };
  const closeRoleModal = () => {
     setSelectedRoles(null);
    setIsRoleModalOpen(false);
  };

  // Permission Modal
  const openPermModal = () => {
    setSelectedPermission(null);
    setIsPermModalOpen(true);
  };
  const closePermModal = () => {
    setSelectedPermission(null);
    setIsPermModalOpen(false);
  };
  const handleDelete = async (Id, type) => {
    const isConfirmed = await confirmDelete();
    if (isConfirmed) {
      try {
        let response;
        if (type === "role") {
          response = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/roles/delete/${Id}`,
            { withCredentials: true }
          );
          if (response.data.status === "success") {
            setRoles(roles.filter((role) => role._id !== Id));
            handleTabChange("rolesTab");
            toast.success("Role deleted successfully!");
          } else {
            toast.error("Failed to delete role.");
          }
        } else if (type === "permission") {
          response = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/permission/delete/${Id}`,
            { withCredentials: true }
          );
          if (response.data.status === "success") {
            setPermissions(
              permissions.filter((permission) => permission._id !== Id)
            ); // Corrected this line
            handleTabChange("permissionTab");
            toast.success("Permission deleted successfully!");
          } else {
            toast.error("Failed to delete permission.");
          }
        }
      } catch (error) {
        toast.error("An error occurred while deleting.");
      }
    }
  };
  const fetchRolesAndPermissions = async () => {
    setLoading(true);
    try {
      const [rolesRes, permissionsRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BASE_URL}/roles`, {
          withCredentials: true,
        }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/permissions`, {
          withCredentials: true,
        }),
      ]);

      if (rolesRes.data.status === "success") {
        setRoles(rolesRes.data.roles);
      }

      if (permissionsRes.data.status === "success") {
        setPermissions(permissionsRes.data.permissions); // Assuming this is correct, but if you meant `permissions`, update the field accordingly
      }
    } catch (error) {
      toast.error(`Something went wrong! ${error?.response?.data?.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRolesAndPermissions();
  }, []); // Empty dependency array to ensure it runs only once on mount
  const handleUpdate = () => {
    fetchRolesAndPermissions();
  };
  {
    loading ? <Spiner /> : "";
  }
  return (
    <>
      <div className="col-lg-9">
        <div className="role-permission-heading p-3">
          <h6>Role and Permissions</h6>
        </div>
        <span className="test">
          <div className="py-2">
            <div className="Role-permission-button rounded-3 text-center py-4 border-1">
              <ul
                className="nav nav-pills mb-3 gap-2 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link px-4 py-0 border-2 ${
                      activeTab === "rolesTab" ? "active" : ""
                    }`}
                    id="pills-home-tab"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected={activeTab === "rolesTab"}
                    onClick={() => handleTabChange("rolesTab")}
                  >
                    Role
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link px-4 py-0 border-2 ${
                      activeTab === "permissionTab" ? "active" : ""
                    }`}
                    id="pills-profile-tab"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected={activeTab === "permissionTab"}
                    onClick={() => handleTabChange("permissionTab")}
                  >
                    Permission
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "rolesTab" ? "show active" : ""
                  }`}
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="bg-white border-0 user-management text-start">
                    <div className="container mt-3 mb-3">
                      <button
                        type="button"
                        className="btn bg-black text-white py-1 px-2 rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#RoleModal"
                        onClick={openRoleModal}
                      >
                        Add New Role
                      </button>
                    </div>

                    <div className="table-responsive">
                      <table className="table text-center">
                        <thead>
                          <tr className="bg-gray">
                            <th>Name</th>
                            <th>Permission</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {roles?.map((role, index) => (
                            <tr key={index}>
                              <td>{role.name}</td>
                              <td>
                                {role.permissions?.map((permission, i) => (
                                  <span key={i}>{permission.name} </span>
                                ))}
                              </td>
                              <td>
                                <span
                                  onClick={() => handleEditClick(role, "role")}
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    className="img-fluid me-2"
                                    src="/images/bxs_edit.png"
                                    width="22px"
                                    height="auto"
                                    alt=""
                                  />
                                </span>
                                <span
                                  onClick={() => handleDelete(role._id, "role")}
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    className="img-fluid"
                                    src="/images/delete-icon.png"
                                    width="22px"
                                    height="auto"
                                    alt=""
                                  />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "permissionTab" ? "show active" : ""
                  }`}
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="bg-white border-0 user-management text-start">
                    <div className="container mt-3 mb-3">
                      <button
                        type="button"
                        className="btn bg-black text-white py-1 px-2 rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#PerModal"
                        onClick={openPermModal}
                      >
                        Add Permission
                      </button>
                    </div>

                    <div className="table-responsive">
                      <table className="table text-center">
                        <thead>
                          <tr className="bg-gray">
                            <th>Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {permissions?.map((permission, index) => (
                            <tr key={index}>
                              <td>{permission.name}</td>
                              <td>
                                <span
                                  onClick={() =>
                                    handleEditClick(permission, "permission")
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    className="img-fluid me-2"
                                    src="/images/bxs_edit.png"
                                    width="22px"
                                    height="auto"
                                    alt=""
                                  />
                                </span>
                                <span
                                  onClick={() =>
                                    handleDelete(permission._id, "permission")
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  <img
                                    className="img-fluid"
                                    src="/images/delete-icon.png"
                                    width="22px"
                                    height="auto"
                                    alt=""
                                  />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
      {isRoleModalOpen &&
        createPortal(
          <RolesModal
            close={closeRoleModal}
            onUpdate={handleUpdate}
            role={selectedRoles}
          />,
          document.body
        )}
      {isPermModalOpen &&
        createPortal(
          <PermissionModal
            close={closePermModal}
            onUpdate={handleUpdate}
            permission={selectedPermission}
          />,
          document.body
        )}
    </>
  );
};

export default Roles;
