import { createContext, useEffect,useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({
        user:'',
    });
    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
        const ParseData = JSON.parse(data);
        setAuth({
            ...auth,
            user:ParseData.user
        })
    }
    // eslint-disable-next-line
    },[]);
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};