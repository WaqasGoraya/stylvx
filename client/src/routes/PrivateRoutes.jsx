import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axios from "axios";

const PrivateRoutes = () => {
    const [auth,setAuth] = useAuth();
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(true); // Add a loading state
    // useEffect(() => {
    //     const authCheck = async () => {
    //         try {
    //             const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, { withCredentials: true });
    //             if (res.data.status === 'success') {
    //                 setOk(true);
    //             }
    //         } catch (error) {
    //             console.error("Auth check failed:", error);
    //             setOk(false);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (auth) {
    //         authCheck();
    //     } else {
    //         setLoading(false);
    //     }
    // }, []);

    // Show a loading indicator while checking auth
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    if(auth.user){
        setOk(true)
    }
    console.log(auth)
    // If auth is ok, render the protected routes, otherwise redirect
    return ok ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
