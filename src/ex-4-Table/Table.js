import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./table.css";





const Input = (props) => {
    const getName = (name) => {
    }
    return (
        <form className="intake">
            <label>ID</label>
            <input type='text' id="id" className="id" ></input>
            <label>Name</label>
            <input type='text' id="name" className="name" ></input>
            <button onClick={TakeInput} className='sbutton' >Submit</button>
        </form>
    );
}


function TakeInput(event) {
    event.preventDefault();

// take input from user

    const td1 = document.querySelector(".id").value;
    const td2 = document.querySelector(".name").value;

    //create tr,td and button class  
    const tr = document.createElement("tr");

    const td3 = document.createElement("td");
    td3.innerText = td1;
    const td4 = document.createElement("td");
    td4.innerText = td2;
    
    const db = document.createElement('button');
    db.innerHTML = '<i >Delete</i>';
db.classList.add("delete-btn");
    const eb = document.createElement('button');
    eb.innerHTML = '<i >Edit</i>';
eb.classList.add("edit-btn"); 

// AppendChild to create a TableRow
    const div = document.createElement('div');
div.appendChild(db);
div.appendChild(eb);

    const td5 = document.createElement("td");
    td5.appendChild(div);
    
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    // Add the new TableRow to Table 
    document.getElementById('list').appendChild(tr);

    // Remove input boxes when function is done
    document.querySelector(".id").value = "";
    document.querySelector(".name").value = "";
}

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

    return (
        <div>
            <button type="button" className="delete-btn" id="db">Delete</button>
            <button type="button" className="edit-btn" id="eb">Edit</button>
        </div>

    );
    // This is used when you want your css and not bootstrap
    //<button type="button" className="delete-btn">Delete</button>
    //<button type="button" className="edit-btn">Edit</button>

}

const TableRow = () => {
    return (<tr>
        <td>Hardcoded</td>
        <td>Code</td>
        <td><TableAction /></td>
    </tr>
    );

}

const Table = () => {
    return (
        <div className="test">
            <Input />
            <table className="table table-dark">
                <TableHeader />
                <tbody id="list">
                    <TableRow />

                </tbody>


            </table>
        </div>

    );
}


export default Table;