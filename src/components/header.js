import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./googleAuth";

const Header = () => {

    return (
        <div className="navbar bg-light navbar-brand container-fluid">
            <Link to="/" className="nav-link">
                Sreamer
            </Link>
            <Link to="/" className="nav-link">
                AllStreams
            </Link>
            <div><GoogleAuth/></div>
            
        </div>
    )
}

export default Header;