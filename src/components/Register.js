import React from "react";
import { setDataFromLocalStorage } from "../services/DataService";
import { Navigate } from "react-router-dom";
export default class Register extends React.Component {
  errors = undefined;

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleSumit = (event) => {
    event.preventDefault();
    const fullName = event.target.elements.fullName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;

    this.validations({ fullName, email, password, confirmPassword });
    const addUser = {
      fullName,
      email,
      password,
    };
    if (!this.errors) {
      setDataFromLocalStorage("users", addUser);
      this.setState({ redirect: true });
    }
  };

  validations = (data) => {
    console.log("data", data);
    this.errors = {};
    if (data.fullName === undefined || data.fullName === "") {
      this.errors.fullName = "Full Name is required!";
      console.log("errors", this.errors);
      return;
    }

    if (data.email === undefined || data.email === "") {
      this.errors.email = "Email is required!";
      console.log("errors", this.errors);
      return;
    }
    if (data.password === undefined || data.password === "") {
      this.errors.password = "Password is required!";
      console.log("errors", this.errors);
      return;
    }

    if (data.password !== data.confirmPassword) {
      this.errors.password = "Password doesn't match!";
      console.log("errors", this.errors);
      return;
    }
    console.log("errors", this.errors);

    this.errors = null;
  };
  render() {
    return (
      <div className="container">
        <h2>New Registration</h2>
        <div>
          {this.state.redirect && <Navigate to="/registrationSuccessfull" />}
        </div>
        <div>{this.errors}</div>
        <form className="col-xxl-6" onSubmit={this.handleSumit}>
          Full Name
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full name"
            name="fullName"
          />
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
          Confirm Password
          <input
            type="password"
            className="form-control"
            placeholder="Enter Confirm Password"
            name="confirmPassword"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Register
          </button>
        </form>
      </div>
    );
  }
}
