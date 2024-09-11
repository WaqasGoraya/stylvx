import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./Users.css";
import Spiner from "../../../components/Loader/Spiner";
import toast from "react-hot-toast";
import confirmDelete from "../../../components/alert/ConfirmDelete";

const Users = () => {
  const navigate = useNavigate();
  const handleEdit = (userId) => {
    navigate(`/dashboard/users/edit/${userId}`)
  }
  const handleDelete =  async(userId) => {
    const isConfirmed = await confirmDelete();
    if(isConfirmed){
      try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/user/delete/${userId}`,{withCredentials:true})
        if (response.data.status === "success") {
          // Update the state to remove the deleted user from the list
          setUsers(users.filter(user => user._id !== userId));
          toast.success("User deleted successfully!");
        } else {
          toast.error("Failed to delete user.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the user.");
      }
    }
  }
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
          withCredentials: true,
        });
        if (res.data && res.data.status == "success") {
          const usersData = res.data.users;
          setUsers(usersData);
        }
      } catch (error) {
        console.log(error.message);
        toast.error(`Something went wrong! ${error?.response?.data?.message || 'Unknown error'}`);
      }
      setLoading(false);
    };
    getUsers();
  }, []);
  if (loading) {
    return <Spiner />;
  }
  return (
    <>
      <div className="col-lg-9">
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-sm-between gy-4 pt-5">
            <h5 className="fw-bold text-uppercase">User Management</h5>
            <div className="position-relative">
            <input className="border-0 rounded-0 border-bottom border border-dark form-control"  type="search" placeholder="Search Products" />
            <span className="position-absolute fa fa-search "></span>
          </div>
          </div>
        <div className="right-content mt-3 mb-5">
          <div className="user-management">
         <Link to="/dashboard/users/add"> <button className="px-3 py-1 border-0  rounded-2 bg-black text-white m-3 fs-6">Add New User</button></Link>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="bg-gray">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users ? (
                    users.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {/* <img
                              className="img-fluid me-2"
                              src="/images/tables-img.png"
                              width="25px"
                              height="25px"
                              alt=""
                            /> */}
                            {user.firstname}
                          </td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>
                          <td>{user.role.map(role => role.name)}</td>
                          <td>
                            <button className="green-btn">Active</button>
                          </td>
                          <td>
                            <span onClick={() => handleEdit(user._id)} style={{cursor:"pointer"}}>
                              <img
                                className="img-fluid me-2"
                                src="/images/bxs_edit.png"
                                width="22px"
                                height="auto"
                                alt=""
                              />
                            </span>
                            <span onClick={() => handleDelete(user._id)} style={{cursor:"pointer"}}>
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
                      );
                    })
                  ) : (
                    <tr style={{textAlign: "center"}}><td colSpan="5">No Data found!</td></tr>
                  )} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
