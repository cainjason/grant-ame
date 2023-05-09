import React from 'react';
import ReactDom from 'react-dom';
import Header from './Components/Header'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";


function Welcome () {
    return (
        <>
            <Header />
            <Navbar />
            <h1> Welcome to Grant </h1>
            <Main />
            <Footer />
        </>
    );
}
 ReactDom.render(<Welcome />, document.getElementById('root'))