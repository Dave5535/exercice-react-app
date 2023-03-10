//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import AppClass from "./ex-1-class/AppClass";
import AppFunction from "./ex-2-function/AppFunction";
import AppArrowFunction from "./ex-3-arrow-function/AppArrowFunction";
import Table from "./ex-4-Table/Table";
import StyleExsample from "./ex-5-css/StyleExsample";
import NameList from "./ex-6-var-function/NameList";



const greatingMessage = <div>Hello React!</div>

const menu = <ul>
    <li>Home</li>
    <li>Login</li>
    <li>Contact Us</li>
</ul>;

console.log('>>>> hello React!');


//ReactDOM.render(menu, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppClass/>);
