import React from 'react';
import ReactDom from 'react-dom';


function Welcome () {
    return (
        <>
            <h1> Welcome to Grant </h1>
        </>
    );
}
 ReactDom.render(<Welcome />, document.getElementById('root'))