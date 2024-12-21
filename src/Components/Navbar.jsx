import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedInAtom } from "../Recoil/Atoms/atom";
import { useRecoilState } from "recoil";
import "./Navbar.css"; // Import the corresponding CSS file

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg"
            className="navbar-logo-img"
            alt="Logo"
          />
        </Link>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            <li>
              <Link to="/" className="navbar-link home-link">
                Home
              </Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link to="/signin" className="navbar-link signin-link">
                  SignIn
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/signup" className="navbar-link signup-link">
                  SignUp
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                  className="navbar-link logout-link"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}