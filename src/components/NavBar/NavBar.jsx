import React from "react";
import './NavBar.css'
function NavBar(){
    return (
        <nav className='nav-bar'>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}
export default NavBar