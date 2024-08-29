import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./Users.css";
import Spiner from "../../../components/Loader/Spiner";
import toast from "react-hot-toast";

const Users = () => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/dashboard/users/edit/${id}`)
  }
  const handleDelete =  (id) => {

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
        toast.error("Something went wrong!");
      }
      setLoading(false);
    };
    getUsers();
  }, []);
  return (
    <>
      {loading ? <Spiner /> : ""}
      <div className="col-lg-9">
        <div className="right-content mt-3 mb-5">
          <div className="user-management">
            <h5 className="p-3">Users Management </h5>
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
