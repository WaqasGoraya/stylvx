import { useState,useEffect } from 'react'
import axios from 'axios'
import './Users.css'

const Users = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
      const users = async()=> {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`,{withCredentials:true});
        console.log(res)
        setLoading(false)
      }
      users();
  },[])
  return (
    <>
{loading ? (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
) : ''}

        <div className="col-lg-9">
          <div className="right-content mt-3 mb-5">
            <div className="user-management">
              <h5 className="p-3">Users Management </h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="bg-gray">
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Date - Time</th>
                      <th>Id</th>
                      <th>City</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>6096 Marjolaine Landing</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>$34,295</td>
                      <td><button className="golden-btn">Pending</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="dark-red">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                    <tr>
                      <td><img className="img-fluid me-2" src="/images/tables-img.png" width="25px" height="25px" alt=""/> William</td>
                      <td>william@gmail.com</td>
                      <td>12.09.2019 - 12.53 PM</td>
                      <td>423</td>
                      <td>New York</td>
                      <td><button className="green-btn">Active</button></td>
                      <td><a href="user-detail.html"><img className="img-fluid me-2" src="/images/bxs_edit.png" width="22px" height="auto" alt=""/></a>
                        <a href="#"><img className="img-fluid" src="/images/delete-icon.png" width="22px" height="auto" alt=""/></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Users