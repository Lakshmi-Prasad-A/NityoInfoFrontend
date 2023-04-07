import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../App.css";

export default function SignUpPage() {  
const API_URL = "http://localhost:8080/nityoinfo/";
  const signUpDefaultValues = {
    userName:"",
    email:"",
    password:""
  }

  const [data, setData] = useState(signUpDefaultValues);

  const changeHandler = e=>{
    e.preventDefault();
     const {name,value}=e.target;

     setData({...data,[name]:value});

     console.log(data);

  }
  const signUpHandler = e=>{
    e.preventDefault();
    console.log(data);

    
       axios.post(API_URL + "saveUser", data).then((response)=>{
          console.log(JSON.stringify(response));
          alert(response.data);
            
    });
  }
  
  return (
    
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
              <input type="text" name="userName" id="name" placeholder="Name" onChange={changeHandler} value={data.userName}  />
            </div>
            <div className="formGroup">
              <i className="far fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} value={data.email}/>
            </div>
            <div className="formGroup">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={changeHandler}
                value={data.password}
              />
            </div>
            <div className="checkBox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span className="text">I Agree with Term & Conditions.</span>
            </div>
            <button className="btn" onClick={signUpHandler}>SIGN UP</button>
          </div>
        </div>
      </div>
    
  );
}
