import React from "react";
import {
  getDataFromLocalStorage,
  loggedInUser,
  revomeDataFromLocalStorage,
} from "../services/DataService";
import { Link } from "react-router-dom";
export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = { users: [], id: "", loggedInUser: loggedInUser() };
  }

  handleDelete = () => {
    revomeDataFromLocalStorage("users", this.state.id);
    this.setState({ users: getDataFromLocalStorage("users") });
  }

  componentDidMount() {
    this.setState({ users: getDataFromLocalStorage("users") });
  }

  render() {
    return (
      <>
        <h3>Manage Users</h3>
        <div className="table-responsive">
          <table
            border="1"
            cellSpacing="0"
            className="table table-striped table-border"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state?.users?.map((item, index) => (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={{ pathname: "/secure/editUser/" + index }}>
                      Edit
                    </Link>
                    {"  "}|
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => this.setState({ id: index })}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      disabled={this.state.loggedInUser.email === item.email}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you Sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleDelete}>OK</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}
