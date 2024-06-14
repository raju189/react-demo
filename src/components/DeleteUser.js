import { useParams } from "react-router-dom";
import DeleteModel from "./DeleteModel";
import {getDataFromLocalStorage} from "../services/DataService";
export default function DeleteUser() {
  let {id} = useParams();
  const users = getDataFromLocalStorage("users");
  const deleteUser = users[id];
    return <DeleteModel deleteUser={deleteUser}/>
    
}
