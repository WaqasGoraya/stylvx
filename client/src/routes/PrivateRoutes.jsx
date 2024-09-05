import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Spiner from "../components/Loader/Spiner";

// PrivateRoute Component
const PrivateRoute = () => {
  const [auth, loading] = useAuth(); // Destructure loading from the context

  // Display a loader while authentication status is being determined
  if (!auth.user && loading) {
    return <Spiner />;
  }

  // Redirect if the user is not authenticated
  if (!auth.user) {
    return <Navigate to="/" />;
  }

  // Determine the user's role
  const userRole = auth.user.role[0]['name'];
  console.log(userRole)
  // Render the appropriate dashboard or redirect if no role matches
  if (userRole === 'admin') {
    return  <Outlet />;
  } else if (userRole === 'user') {
    console.log(userRole);
    return  <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
