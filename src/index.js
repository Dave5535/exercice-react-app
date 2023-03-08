//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import AppClass from "./ex-1-class/AppClass";
import AppFunction from "./ex-2-function/AppFunction";
import AppArrowFunction from "./ex-3-arrow-function/AppArrowFunction";



const greatingMessage = <div>Hello React!</div>

const menu = <ul>
    <li>Home</li>
    <li>Login</li>
    <li>Contact Us</li>
</ul>;

console.log('>>>> hello React!');

//ReactDOM.render(menu, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppArrowFunction />);