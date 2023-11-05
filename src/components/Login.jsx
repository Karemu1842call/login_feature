import React, { useState } from "react";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className={`form-container ${isActive ? "sign-in" : ""}`}>
        <form action="">
          <h1>{isActive ? "Sign in" : "Create Account"}</h1>
          <div className="social-icons">
            <a href="http://google.com" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="http://facebook.com" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="http://github.com" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="http://linkedin.com" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>    
          </div>
          <span>
            {isActive
              ? "Or use email and password"
              : "or use Email for registration"}
          </span>
          {!isActive && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button id={isActive ? "login" : "register"}>
            {isActive ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Hello, friend!</h1>
            <p>Register with your personal details to use all site features</p>

            <button
              className={`hidden ${isActive ? "active" : ""}`}
              id="login"
              onClick={handleLoginClick}
            >
              Sign up
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use site features</p>
            <button
              className={`hidden ${isActive ? "" : "active"}`}
              id="register"
              onClick={handleRegisterClick}
            >
              Sign in
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
