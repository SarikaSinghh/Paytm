import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../Recoil/Atoms/atom";
import "./Home.css"; // Link the CSS file

export default function Home() {
  const [isLoggedIn] = useRecoilState(isLoggedInAtom);

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            <span className="text-sky">Pay</span>
            <span className="text-blue">tm</span>: Empowering Digital
            Transactions for a Seamless Tomorrow
          </h1>
          <p className="home-description">
            Transforming Payments, Enriching Lives - Your Gateway to a Cashless
            Future
          </p>
          {!isLoggedIn ? (
            <Link to="/signin" className="signin-btn">
              Sign In
            </Link>
          ) : (
            <Link to="/dashboard" className="dashboard-btn">
              Go to Dashboard
            </Link>
          )}
        </div>
        <div className="home-image">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"
            alt="Paytm Logo"
            className="logo-img"
          />
        </div>
      </div>
    </section>
  );
}