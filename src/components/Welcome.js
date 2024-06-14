import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const gotoLogin = (event) => {
    event.preventDefault(); // stop page refresh
    navigate("/login");
  };

  const gotoRegister = (event) => {
    event.preventDefault(); // stop page refresh
    navigate("/register");
  };

  return (
    <>
    <div className="container">
      <h1>Welcome to User Management</h1>
      <p>Existing Users</p>
      <button className="btn btn-primary m-2" onClick={gotoLogin}>
        Login
      </button>
      <p>New Users</p>
      <button className="btn btn-primary m-2" onClick={gotoRegister}>
        Register
      </button>
      </div>s
    </>
  );
}
