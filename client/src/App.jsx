import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/about";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Partner from "./pages/Partner";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermOfUse from "./pages/TermOfUse";
import CookiesPolicy from "./pages/CookiesPolicy";
import CookiesSetting from "./pages/CookiesSetting";
import Blogs from "./pages/Blogs";
import Collections from "./pages/Collections";
import Wiki from "./pages/Wiki";
import ResetPassword from "./pages/ResetPassword";
import ScrollToTop from "./components/Scroll/ScrollToTop ";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./components/Layout/DashboardLayout";
import PrivateRoutes from "./routes/PrivateRoutes";
import AdminDashboard from "./dashboard/AdminDashboard";
import Users from "./dashboard/pages/user/Users";
import Products from "./dashboard/pages/product/Products";
import Roles from "./dashboard/pages/roles/Roles";
import EditUser from "./dashboard/pages/user/EditUser";
import AddUser from "./dashboard/pages/user/AddUser";
import EditProduct from "./dashboard/pages/product/EditProduct";
import AddProduct from "./dashboard/pages/product/AddProduct";
import UserDashboardLayout from "./components/Layout/UserDashboardLayout";
import UserDashboard from "./dashboard/UserDashboard";
import ChangePassword from "./dashboard/profilePages/ChangePassword";
function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermOfUse />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/cookies-setting" element={<CookiesSetting />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/reset-password-confirm/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* dashboard routes */}
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="users/edit/:id" element={<EditUser />} />
            <Route path="roles" element={<Roles />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
          </Route>
          <Route element={<UserDashboardLayout />}>
            <Route path="profile" element={<UserDashboard />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
        {/* User profile */}
        {/* <Route path="/profile" element={<PrivateRoutes />}>
          <Route element={<UserDashboardLayout />}>
            <Route path="user" element={<UserDashboard />} />
          </Route>
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
