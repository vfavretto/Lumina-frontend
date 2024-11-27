import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../assets/styles/header.css";
import whiteLogo from "../../../assets/images/whiteLogo.png";
import whiteLogoMini from "../../../assets/images/whiteLogoMini.png";
import AuthContext from "../../../context/authContext";
import noImg from "../../../assets/images/Perfil/no_profile.jpg"

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isAuth, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userImg = localStorage.getItem("userImg");
  const userId = localStorage.getItem("userId");

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${userId}`);
    setUserMenuOpen(false);
  };

  const handleEditClick = () => {
    navigate(`/register/${userId}`);
    setUserMenuOpen(false);
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
    setUserMenuOpen(false);
  };

  return (
    <header className="body">
      <nav className="navbar navbar-expand-xl navbar-dark">
        <div className="container-fluid">
          <div className="container">
            <a href="/" className="navbar-brand fs-4">
              <img src={whiteLogo} alt="Logo" />
            </a>
          </div>
          <button
            className="navbar-toggler shadow-none border-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="sidebar offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-center">
              <div className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={whiteLogoMini} alt="Mini Logo" />
              </div>
            </div>
            <div className="offcanvas-body flex-column flex-xl-row p-4 d-flex">
              <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-2">
                  <NavLink to="/home" className="nav-link" end>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/about" className="nav-link">
                    Sobre
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/partners" className="nav-link">
                    Parceiros
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
              </ul>

              <form className="d-flex justify-content-center" role="search">
                <input
                  type="search"
                  size="10"
                  placeholder="Buscar..."
                  id="buscar"
                  name="buscar"
                  aria-label="Search"
                />
                <label htmlFor="buscar" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_8_9)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.0503 31.7597C26.8611 34.5503 22.6872 36.2416 18.1208 36.2416C8.11208 36.2416 0 28.1295 0 18.1208C0 8.11208 8.11208 0 18.1208 0C28.1295 0 36.2416 8.11208 36.2416 18.1208C36.2416 22.6872 34.5503 26.8671 31.7597 30.0503L44.6436 42.9342C45.1148 43.4054 45.1148 44.1725 44.6436 44.6436C44.1725 45.1148 43.4054 45.1148 42.9342 44.6436L30.0503 31.7597ZM33.8255 18.1208C33.8255 26.7946 26.7946 33.8255 18.1208 33.8255C9.44698 33.8255 2.41611 26.7946 2.41611 18.1208C2.41611 9.44698 9.44698 2.41611 18.1208 2.41611C26.7946 2.41611 33.8255 9.44698 33.8255 18.1208Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_9">
                        <rect width="45" height="45" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
              </form>

              <div className="d-flex justify-content-center align-items-center gap-3">
                {isAuth ? (
                  <div className="user-menu-container">
                    <img
                      src={userImg === "" || userImg === "undefined" ? noImg : userImg}
                      alt="User Profile"
                      className="user-profile-img"
                      onClick={toggleUserMenu}
                    />
                    {userMenuOpen && (
                      <div className="user-menu">
                        <button 
                          onClick={handleProfileClick}
                          className="user-menu-item"
                        >
                          <i className="fas fa-user"></i> Perfil
                        </button>
                        <button 
                          onClick={handleEditClick}
                          className="user-menu-item"
                        >
                          <i className="fas fa-edit"></i> Editar
                        </button>
                        <button 
                          onClick={handleLogoutClick}
                          className="user-menu-item logout"
                        >
                          <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a href="/login" className="text-white">
                    <input type="button" value="Login" id="loginBtn" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;