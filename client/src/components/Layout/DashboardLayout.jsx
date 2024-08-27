import DashboardHeader from "../Header/DashboardHeader"
import DashboardFooter from "../Footer/DashboardFooter"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <>
    <DashboardHeader/>
    <main><Outlet/></main>
    <DashboardFooter/>
    </>
  )
}

export default DashboardLayout