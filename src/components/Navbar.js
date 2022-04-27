import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
import '../css/NavbarCSS.scss';

const Navbar = () => {
    const { user } = useUserAuth();
    return(
        <nav className='navbar'>
            <div id='navlogo'>
                LOGO
            </div>
            <NavLink className='navlink' to='/'>
                Home
            </NavLink>
            <NavLink className='navlink' to='/preference' id={user ? '' : 'hidden'}>
                Search
            </NavLink>
            <NavLink className='navlink' to='/login' id={user ? 'hidden' : ''}>
                Login
            </NavLink>
            <NavLink className='navlink' to='/signup' id={user ? 'hidden' : ''}>
                Signup
            </NavLink>
            <NavLink className='navlink' to='/forgotPassword' id={user ? '': 'hidden'}>
                Account
            </NavLink>
        </nav>
    );
};

export default Navbar;