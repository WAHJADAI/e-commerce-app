import React from "react";
import 'pages/Navbar.css'


function Navbar(){
    return(
        <nav className="nav">
            <h2>Shop</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/SignIn">Sign In</a></li>
            </ul>
        </nav>
    )
}

export default Navbar