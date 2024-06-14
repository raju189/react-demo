import { Link, Outlet } from "react-router-dom";
import { loggedInUser } from "../services/DataService";
import { useEffect, useState } from "react";
function Nav() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    setUser(loggedInUser())
  },[])
 
  return (
    <>
      {!user ? (
        ""
      ) : (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Dashboard
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Welcome
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/secure/chats">
                      Group Chat
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/secure/users">
                      Manage Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/secure/documents">
                      Manage Documents
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/secure/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <Outlet />
          </div>{" "}
        </>
      )}
    </>
  );
}
export default Nav;
