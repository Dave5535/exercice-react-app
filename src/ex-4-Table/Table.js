import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}
const TableAction = () => {
    return(
        <div>
<button type="button" className="btn btn-danger">Delete</button>
<button type="button" className="btn btn-warning">Edit</button>
        </div>
    
    );
    // This is used when you want your css and not bootstrap
    //<button type="button" className="delete-btn">Delete</button>
    //<button type="button" className="edit-btn">Edit</button>

}

const TableRow = () => {

    return (<tbody>
        <tr>
            <td>1</td>
            <td>test testsson</td>
            <td><TableAction/></td>
        </tr>
        <tr>
            <td>2</td>
            <td>David Svanteson</td>
            <td><TableAction/></td>
        </tr>
    </tbody>);

}

const Table = () => {
    return (
        <div className="test">
            <table className="table table-dark">
                <TableHeader />
                <TableRow />
            </table>
        </div>

    );
}


export default Table;