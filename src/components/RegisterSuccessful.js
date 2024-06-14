import { useNavigate } from "react-router-dom";

export default function RegisterSuccessful() {
  let navigate = useNavigate();

  const gotoLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container-fluid text-center">
      <h2>Your registration is successfully</h2>
      Congratulations!, Thank you for your Registration
      <button className="btn btn-link" onClick={gotoLogin}>
       Please click here
      </button>{" "}
      to navigate login page
    </div>
  );
}
