import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Spiner from "../components/Loader/Spiner";

// PrivateRoute Component
const PrivateRoute = () => {
    const [ auth, loading ] = useAuth(); // Destructure loading from the context
    if (!auth.user && loading) {
        return <Spiner/>; // You can customize this to a loader component
    }
    console.log(auth.user.role[0]['name'])
  return auth.user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
