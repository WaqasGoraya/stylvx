import { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Spiner from "../../../components/Loader/Spiner";
import './Roles.css'
import { createPortal } from 'react-dom';
import RoleModal from './RoleModal';
import PermissionModal from './PermissionModal';

const Roles = () => {
  const [roles,setRoles] = useState(null);
  const [permissions,setPermissions] = useState(null);
  const [loading,setLoading] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isPermModalOpen, setIsPermModalOpen] = useState(false);

  // Role Modal
  const openRoleModal = () => setIsRoleModalOpen(true);
  const closeRoleModal = () => setIsRoleModalOpen(false);
  // Permission Modal
  const openPermModal = () => setIsPermModalOpen(true);
  const closePermModal = () => setIsPermModalOpen(false);

  useEffect(() => {
    const fetchRolesAndPermissions = async () => {
      setLoading(true);
      try {
        const [rolesRes, permissionsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BASE_URL}/roles`, { withCredentials: true }),
          axios.get(`${import.meta.env.VITE_BASE_URL}/permissions`, { withCredentials: true })
        ]);
  
        if (rolesRes.data.status === 'success') {
          setRoles(rolesRes.data.roles);
        }
  
        if (permissionsRes.data.status === 'success') {
          setPermissions(permissionsRes.data.permissions); // Assuming this is correct, but if you meant `permissions`, update the field accordingly
        }
  
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
  
    fetchRolesAndPermissions();
  }, []); // Empty dependency array to ensure it runs only once on mount
  {loading? <Spiner/> : ''}
  return (
    <>
      
        <div className="col-lg-9">
          <div className="role-permission-heading p-3">
            <h6>Role and Permissions </h6>
          </div>
          <span className="test">
          <div className="py-2">
            <div className="Role-permission-button rounded-3 text-center py-4 border-1">
              <ul className="nav nav-pills mb-3 gap-2 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active px-4 py-0 border-2" id="pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                    aria-selected="true">Role</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link border-1 px-4 py-0 border-2" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                    aria-selected="false">Permission</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="bg-white border-0 user-management text-start">
                    <div className="container mt-3 mb-3">
                      <button type="button" className="btn bg-black text-white py-1 px-2 rounded-0" data-bs-toggle="modal"
                        data-bs-target="#RoleModal" onClick={openRoleModal}>
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
                        {roles?.map((role,index) => (
                          <tr key={index}>
                            <td>{role.name}</td>
                            <td>{role.permissions?.map((permission,i)=>(
                              <span key={i}>{permission.name} </span>
                            ))}</td>
                            <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px"
                                  height="auto" alt=""/></a>
                              <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px"
                                  height="auto" alt=""/></a>
                            </td>
                          </tr>
                        ))}
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="bg-white border-0 user-management text-start">
                    <div className="container mt-3 mb-3">
                      <button type="button" className="btn bg-black text-white py-1 px-2 rounded-0" data-bs-toggle="modal"
                        data-bs-target="#PerModal" onClick={openPermModal}>
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
                        {permissions?.map((permission,index)=>(
                          <tr key={index}>
                          <td>{permission.name}</td>
                          <td><a href="#"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px"
                                height="auto" alt=""/></a>
                            <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px"
                                height="auto" alt=""/></a>
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
        {isRoleModalOpen && createPortal(<RoleModal close={closeRoleModal} />, document.body)}
        {isPermModalOpen && createPortal(<PermissionModal close={closePermModal} />, document.body)}
    </>
  )
}

export default Roles