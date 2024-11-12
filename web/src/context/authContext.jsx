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
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuth(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    console.log(`${backend}/api/auth/login`);
    try {
      const response = await axios.post(
        `${backend}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setIsAuth(true);
      setError(null);

      return response.data;
    } catch (error) {
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
      console.log(`${backend}api/auth/register`)
      const response = await axios.post(
        `${backend}api/auth/register`,
        {
          fullName,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setIsAuth(true);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro ao se conectar ao servidor.");
      }
      throw error;
    }
  };

  const value = {
    isAuth,
    error,
    handleLogin,
    handleRegister,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
