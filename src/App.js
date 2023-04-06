import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import "./App.css";
import SignUpPage from "./components/pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
        </Switch>
      </div>
    </Router>
  );
}
