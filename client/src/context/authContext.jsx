import { createContext, useEffect,useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({
        user:'',
    });
    const [loading, setLoading] = useState(true); // Add a loading state
    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
        const ParseData = JSON.parse(data);
        setAuth({
            ...auth,
            user:ParseData.user
        })
        setLoading(false); // Set loading to false once data is retrieved
    }
    setLoading(false)
    // eslint-disable-next-line
    },[]);
    return (
        <AuthContext.Provider value={[ auth, setAuth, loading ]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};