import React from "react";
import Welcome from "./Welcome";
import UserList from "./UserList";
import ChatList from "./ChatList";
import DocumentList from "./DocumentList";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import Nav from "./nav";
import Register from "./Register";
import RegisterSuccssful from "./RegisterSuccessful";
import NotFound from "./NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secure/" element={<Nav />}>
          <Route path="chats" element={<ChatList />} />
          <Route path="users" element={<UserList />} />
          <Route path="editUser/:id" element={<EditUser />} />
          <Route path="deleteUser/:id" element={<DeleteUser />} />
          <Route path="documents" element={<DocumentList />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route index element={<Welcome />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="registrationSuccessfull" element={<RegisterSuccssful />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
