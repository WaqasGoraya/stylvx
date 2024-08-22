import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/about'
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Partner from './pages/Partner';
import Faqs from './pages/Faqs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse';
import CookiesPolicy from './pages/CookiesPolicy';
import CookiesSetting from './pages/CookiesSetting';
import Blogs from './pages/Blogs';
import Collections from './pages/Collections';
import Wiki from './pages/Wiki';
import ScrollToTop from './components/Scroll/ScrollToTop ';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Layout>
    <ScrollToTop/>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-use' element={<TermOfUse/>}/>
        <Route path='/cookies-policy' element={<CookiesPolicy/>}/>
        <Route path='/cookies-setting' element={<CookiesSetting/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/wiki' element={<Wiki/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
