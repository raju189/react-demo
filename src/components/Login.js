import React from "react";
import { Navigate } from "react-router-dom";
import { getDataFromLocalStorage, loggedInUser } from "../services/DataService";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // objet
      redirect: false,
      redirectRegister: false,
      isAuthenticated: true
    };
  }
  handleSumit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let users = getDataFromLocalStorage("users");
    if(!users){
      this.setState({ redirectRegister: true });
      return
    }
    let user = users.filter((user) => user.email === email);
    if (this.validateUser(user[0], password)) {
      loggedInUser(user[0]);
      console.log("Login successfully");
      this.setState({ redirect: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
  };

  validateUser = (user, password) => {
    return user && user.password === password;
  };

  render() {
    return (
      <div className="container container-fluid">
        <div>{this.state.redirect && <Navigate to="/secure/users" />}</div>
        <div>{this.state.redirectRegister && <Navigate to="/register" />}</div>
        <h2>Login</h2>
        <span className="text-danger">{ this.state.isAuthenticated? "": "Please enter valid details!"}</span>
        <form className="col-xxl-6" onSubmit={this.handleSumit}>
          Email
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
          />
          Password
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    );
  }
}
