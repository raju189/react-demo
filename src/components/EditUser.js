import { useNavigate, useParams } from "react-router-dom";
import { getDataFromLocalStorage, loggedInUser, revomeAndUpdateDataFromLocalStorage } from "../services/DataService";

export default function EditUser(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = getDataFromLocalStorage("users");
  const editUser = users[id];
  const {fullName, email, password} = editUser;

  const handleSumit = (event) => {
    debugger
    event.preventDefault();
    const fullName = event.target.elements.fullName.value;
    const email = event.target.elements.email.value;
    const updateUser = {
      fullName,
      email,
      password
    };
    revomeAndUpdateDataFromLocalStorage("users", editUser, updateUser);
    let logInUser = loggedInUser();
    if(logInUser.email === editUser.email){
      loggedInUser(updateUser);
    }
    navigate("/secure/users");
  };

  return (
      <form className="col-xxl-6" onSubmit={handleSumit}>
        Full Name
        <input
          type="text"
          className="form-control"
          placeholder="Enter Full name"
          defaultValue={fullName}
          name="fullName"
        />
        Email
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          defaultValue={email}
          name="email"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
  );
}
