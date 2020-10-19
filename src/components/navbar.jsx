import React from 'react';
import logo from '../images/logo.jpg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} width="175" height="100" className="m-2" alt="Logo"/>
            <a className="navbar-brand m-2" href="https://dundermifflinpaper.com/">
                <h1 className="impactfont">Dunder Mifflin Paper Company</h1>
                <h5>A People Person's Paper People</h5>
            </a>
        </nav>
    );
}

export default NavBar;