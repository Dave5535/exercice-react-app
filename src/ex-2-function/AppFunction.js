import React from 'react';

//rsf

function Header() {

    return (
        <>
            Header
        </>
    );
}
function Content() {

    return (
        <>
            Content; <br/>
            <Wellcome name='Test' message=' Wellcome to my first React App'/>
            <br/>
            <Wellcome name='ABC' message=' Wellcome to my first React App'/>
        </>
    );
}
function Footer() {

    return (
        <>
            Footer
        </>
    );
}
function Wellcome(props){
    return(
        <div>
        Hi {props.name},{props.message}
        </div>
    );
}
function AppFunction() {
    return (
        <>
            <Header />
            <br />
            <Content />
            <br />
            <Footer />
        </>

    );
}
export default AppFunction;