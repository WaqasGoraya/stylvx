import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import toast from 'react-hot-toast';

const useLogout = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/logout`, {}, { withCredentials: true });
      console.log(response);
      if (response.data && response.data.status === 'success') {
        setAuth({
          ...auth,
          user: null
        });
        localStorage.removeItem('auth');
        toast.success('Logout Success');
        navigate('/'); // Redirect to login page after logout
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  };

  return handleLogout;
};

export default useLogout;
