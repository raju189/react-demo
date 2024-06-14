import React, { useEffect, useRef, useState } from "react";
import {
  setDataFromLocalStorage,
  loggedInUser,
  getDataFromLocalStorage,
  revomeDataFromLocalStorage,
  revomeAndUpdateDataFromLocalStorage
} from "../services/DataService";
export default function DocumentList() {
  const inputRef = useRef(null);
  const [documents, setDocuments] = useState([]);
  const [loggedUser, setLoggedUser] = useState(loggedInUser());
  const [id, setId] = useState("");
  const [editDocument, setEditDocument] = useState(null);

  useEffect(() => {
    setDocuments(getDataFromLocalStorage("documents"));
  }, []);

  const handleSumit = (event) => {
    if (inputRef.current?.files) {
      let email = loggedUser.email;
      let name = inputRef.current?.files[0].name;
      const description = event.target.elements.fileDescription.value;
      let document = {
        email,
        description,
        name,
      }
      editDocument? revomeAndUpdateDataFromLocalStorage("documents", id, document) : setDataFromLocalStorage("documents", document );
      setDocuments(getDataFromLocalStorage("documents"));
    }
  };

  const handleDelete = () => {
    revomeDataFromLocalStorage("documents", id);
    setDocuments(getDataFromLocalStorage("documents"));
  }

  return (
    <>
      <h2>My Uploads</h2>
      <div className="table-responsive">
        <table className="table table-striped table-border" aria-hidden="true">
          <thead>
            <th>Label</th>
            <th> File Name</th>
            <th>Action</th>
          </thead>
          <tbody>
            {documents
              ?.filter((item) => item.email === loggedUser.email)
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        setId(index);
                        setEditDocument(item);
                      }
                      }
                      className="btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#uploadModal"
                    >
                      Edit
                    </button>
                    |
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => setId(index)}
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <h2>Shared Uploads</h2>
        <table className="table table-striped table-border" aria-hidden="true">
          <thead>
            <th>Label</th>
            <th> File Name</th>
            <th>Shared by</th>
          </thead>
          <tbody>
            <tr>
              <td> Sales Team Attendance Sept 2023</td>
              <td>Sale-Attend-Sept2024.xls</td>
              <td>Textuser2@gamil.com</td>
            </tr>
            <tr>
              <td> Office Rules</td>
              <td>OfficeRule.doc</td>
              <td>Textuser@gamil.com</td>
            </tr>
            <tr>
              <td>
                {" "}
                <button
                  type="button"
                  className="btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#uploadModal"
                >
                  +Add Upload
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete Document
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you Sure?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDelete}
              >
                OK
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="uploadModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Upload
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="col-xxl-6" onSubmit={handleSumit}>
              <div className="modal-body">
                <div>
                  Full Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full name"
                    name="fileDescription"
                    defaultValue={editDocument? editDocument.description :""}
                  />
                  <input
                    ref={inputRef}
                    type="file"
                    name="fileName"
                    id="fileName"
                    defaultValue={editDocument? editDocument.name:""}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                 {editDocument? "Update":"Upload"} 
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
