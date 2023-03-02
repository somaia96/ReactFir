import React from "react";
import { Link , NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = ()=>{
    return(
        <div className="nav">
            <a className="logo" href="#">logo</a>
            <ul>
                <NavLink className="no" to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>

            </ul>
        </div>
    )
}

export default Nav;