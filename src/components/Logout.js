import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/DataService";
import { useEffect } from "react";
export default function Logout() {
  let navigate = useNavigate();
  useEffect(() => {
    logoutUser();
    navigate("/welcome");
  }, []);

  return <div>Logout Success</div>;
}
