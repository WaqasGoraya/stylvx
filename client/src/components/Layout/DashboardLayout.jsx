import DashboardHeader from "../Header/DashboardHeader";
import DashboardFooter from "../Footer/DashboardFooter";
import Sidebar from "../DashboardSidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <section className="dashboard-sec">
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

export default DashboardLayout;
