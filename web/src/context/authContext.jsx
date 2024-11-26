import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    console.log("Initial Auth Check - Token:", token);
    console.log("Initial Auth Check - UserID:", userId);

    if (token && userId) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuth(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        `${backend}/api/v1/auth/login`,
        { email, password }
      );
      
      console.log("Login Response:", response.data);

      const userId = response.data.empresa._id || response.data.empresa?._id;
      
      if (!userId) {
        throw new Error("User ID not found in the response");
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", userId.toString());
      
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      
      setIsAuth(true);
      setError(null);

      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro ao se conectar ao servidor.");
      }
      throw error;
    }
  };

  const handleRegister = async (fullName, email, password) => {
    try {
      const response = await axios.post(
        `${backend}/api/v1/auth/register`,
        {
          "userName": fullName,
          "email": email,
          "password": password,
        }
      );
      
      console.log("Register Response:", response.data);

      const userId = response.data.empresa._id || response.data.empresa?._id;
      
      if (!userId) {
        throw new Error("User ID not found in the response");
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", userId.toString()); // Convert to string
      
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      
      setIsAuth(true);
      setError(null);
      return response.data;
    } catch (error) {
      console.error("Register Error:", error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro ao se conectar ao servidor.");
      }
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuth(false);
    delete axios.defaults.headers.common["Authorization"];
  };

  const value = {
    isAuth,
    error,
    handleLogin,
    handleRegister,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;