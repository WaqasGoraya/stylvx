import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,  // Start with user as null
    });
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const data = localStorage.getItem('auth');
        
        if (data) {
            const ParseData = JSON.parse(data);
            setAuth({
                user: ParseData.user,
            });
        }

        // Ensure that loading is set to false only after checking localStorage
        setLoading(false);
        // eslint-disable-next-line
    }, []);

    return (
        <AuthContext.Provider value={[ auth, setAuth, loading ]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
