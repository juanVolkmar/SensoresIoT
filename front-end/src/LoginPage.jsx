import React from "react";
import "./LoginPage.css";
import upb from "./assets/logo_upb.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={upb} alt="UPB Logo" className="login-logo" />
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue to your dashboard</p>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-footer">Don't have an account? <Link to="/register" className="Login-button"> Register </Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
