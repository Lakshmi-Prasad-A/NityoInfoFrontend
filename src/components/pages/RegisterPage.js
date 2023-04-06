import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignUpPage() {
  return (
    <body>
      <div className="container">
        <div className="formWraper">
          <div className="welcomeDiv">
            <h2>
              Welcome to <i id="nityo">Nityo Infotech!</i>
            </h2>
            <p className="text">
              Get in touch with us for deliver smarter outcomes with Nityo's
              Artificial Intelligence Services.
            </p>
            <Link to="/login">
              <button className="btn2">
                <span>Sign In</span>
              </button>
            </Link>
          </div>
          <div className="formDiv">
            <h2>Create Account</h2>
            <p className="text"> Sign Up with Social Media</p>
            <div className="socialBtn">
              <div className="facebook icon">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="twitter icon">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="instagram icon">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="orDiv">Or</div>
            <p className="text">Sign Up with Email Address</p>
            <div className="formGroup">
              <i className="far fa-user"></i>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="formGroup">
              <i className="far fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="formGroup">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="checkBox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span className="text">I Agree with Term & Conditions.</span>
            </div>
            <button className="btn">SIGN UP</button>
          </div>
        </div>
      </div>
    </body>
  );
}
