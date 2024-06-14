import { useState, useEffect } from "react";
import {
  getDataFromLocalStorage,
  loggedInUser,
  setDataFromLocalStorage,
} from "../services/DataService";

export default function ChatList() {
  let [fullName, setFullName] = useState("");
  let [chats, setChats] = useState([]);
  let [userText, setUserText] = useState("");

  useEffect(() => {
    let user = loggedInUser();
    if (user) setFullName(user.fullName);
  }, []);

  useEffect(() => {
    let chats = getDataFromLocalStorage("chats");
    if (chats) setChats(chats);
  }, [userText]);

  function handleSumit(event) {
    event.preventDefault();
    let user = loggedInUser();
    let userName = user ? user.fullName : "Guest";
    let timeStamp = new Date().toISOString();
    let userText = event.target.elements.userText.value;
    setDataFromLocalStorage("chats", {
      userText,
      userName,
      timeStamp,
    });
    setUserText(event.target.elements.userText.value);
  }

  return (
    <>
      <h2>Group Chat</h2>
      <div className="container border">
        {chats.map((item, index) => (
          <p>
            <b>
              [{item.timeStamp}]:: [{item.userName}]
            </b>
            - {item.userText}
          </p>
        ))}
      </div>

      <div className="container">
        <div class="form-group row">
          <form onSubmit={handleSumit}>
            <label for="userText">{fullName}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Message"
              name="userText"
              id="userText"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Send
            </button>
            <button type="reset" className="btn btn-primary mt-2">
              Refresh
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
