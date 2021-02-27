import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1">
                    Navbar
                    <span className="badge badge-pill badge-secondary">{ totalCounters }</span>
                </a>
            </div>
        </nav>
     );
}



// turn this into a stateless functional component

export default NavBar;