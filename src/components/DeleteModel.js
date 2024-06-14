import {revomeDataFromLocalStorage} from "../services/DataService";

function DeleteModal(props) {
    let {user} = props.deleteUser;

    const handleDelete = (event) => {
        revomeDataFromLocalStorage("users", user);
    }
    return (<div>
        <h1>Bootstrap Modal Example</h1>
        <a type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Delete
        </a>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleDelete} className="btn btn-primary">OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default DeleteModal;