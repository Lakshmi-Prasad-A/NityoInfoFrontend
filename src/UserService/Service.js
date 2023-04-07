import React from 'react'
import axios from 'axios';

const API_URL = "http://localhost:8080/nityoinfo/";
function Service(){
    const register = (username, email, password) => {
        return axios.post(API_URL + "saveUser", {
          username,
          email,
          password,
        }).then((response)=>{
            if(response.data.username){
                localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
    
      const login = (username, password) =>{
        return axios.post(API_URL + "signin", {
          username,
          password,
        }).then((response)=>{
          if(response.data.username){
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
      };
      const Service = {
        register,
        login,
        getCurrentUser,
      }
    }
}

      export default Service;
