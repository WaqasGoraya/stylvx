import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Spiner from "../components/Loader/Spiner";

// PrivateRoute Component
const PrivateRoute = () => {
  const [auth, loading] = useAuth(); // Destructure loading from the context
  console.log(auth)
  // Show spinner while authentication status is loading
  if (!auth.user && loading) {
    return <Spiner />;
  }
console.log(auth)
  // Redirect to home page if the user is not authenticated
  if (!auth.user) {
    return <Navigate to="/" />;
  }

  // Determine the user's role
  const userRole = auth.user.role[0]['name'];

  // Render the appropriate dashboard or redirect if no role matches
  if (userRole === 'admin' || userRole === 'user') {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
