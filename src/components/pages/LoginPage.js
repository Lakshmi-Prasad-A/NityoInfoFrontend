import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../App.css";

export default function SignInPage() {

  const[email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  const API_URL = "http://localhost:8080/nityoinfo/";

  const submitHandle = e=>{
    e.preventDefault();
    console.log(email+">>>"+password);

    axios.post(API_URL + "signin", {
      email,
      password,
    }).then((response)=>{
      if(response.data.username){
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      alert("User Successfully Login")
    });
  }


  // const funChange(t){
    
  // }
  // const handleChange = event => {
  //   setMessage(event.target.value);
  //   console.log('value is:', event.target.value);
  // }
  

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

          <Link to="/signup">
            <button className="btn2">
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
        <div className="formDiv">
          <h2>SignIn Account</h2>
          <div className="signInDiv">
            <div className="formGroup">
              <i className="far fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

            </div>
            <div className="formGroup">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChangeCapture={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <Link to="/forget-password">
              <div className="col">
                Forgot password?
              </div>
            </Link>
          </div>
          <button className="btn" onClick={submitHandle}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
}
