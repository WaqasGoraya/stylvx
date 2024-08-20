import Header from "../Header/Header"
import InnerHeader from "../Header/InnerHeader";
import Footer from "../Footer/Footer"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
const Layout = ({children}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
    {isHomePage ? <Header/> : <InnerHeader/>}
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout