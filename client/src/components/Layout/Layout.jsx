import Header from "../Header/Header"
import InnerHeader from "../Header/InnerHeader";
import Footer from "../Footer/Footer"
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
    {isHomePage ? <Header/> : <InnerHeader/>}
    <main><Outlet/></main>
    <Footer/>
    </>
  )
}

export default Layout