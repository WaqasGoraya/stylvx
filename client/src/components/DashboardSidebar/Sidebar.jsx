import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
         <div className="col-lg-3 d-none d-lg-block">
              <div className="disktop-view h-100">
                <div className="main-sidebar">
                  <ul className="list-unstyled mb-0">
                    <NavLink
                      className={({ isActive }) => `text-decoration-none fw-bold ${isActive ? "active" : ""}`}

                      to='/dashboard/admin'
                    >
                      <li>Dashboard</li>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => `text-decoration-none fw-bold ${isActive ? "active" : ""}`}
                      to='/dashboard/users'
                    >
                      <li>Users management</li>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => `text-decoration-none fw-bold ${isActive ? "active" : ""}`}
                      to='/dashboard/roles'
                    >
                      <li>Roles and Permissions</li>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => `text-decoration-none fw-bold ${isActive ? "active" : ""}`}
                      to='/dashboard/products'
                    >
                      <li>product management</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
    </>
  )
}

export default Sidebar