import React from "react";
import 'pages/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="nav">
            <h2>Shop</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/SignIn">Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar