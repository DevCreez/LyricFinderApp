import React from 'react';

const Navbar = () => {
    return (
    // bg-dark means background dark which will make it back and mb-5 means margin bottom 5, mx-auto means margin auto on the x axis
    <nav className="navbar navbar-dark bg-dark mb-5"> 
        <span className="navbar-brand mb-0 h1 mx-auto"> LyricFinder
        </span>
    </nav>
    )
}

export default Navbar;