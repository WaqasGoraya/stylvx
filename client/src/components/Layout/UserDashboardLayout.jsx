import DashboardHeader from "../Header/DashboardHeader";
import DashboardFooter from "../Footer/DashboardFooter";
import Sidebar from "../DashboardSidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './UserDashboard.css';

const UserDashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <section className="dashboard-sec" id="edit-profile-section">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </section>
      <DashboardFooter />
    </>
  );
};

export default UserDashboardLayout;
