import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import '../css/NavbarCSS.scss';

const Navbar = () => {
    const { user, logout } = useUserAuth();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    }
    
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
            <NavLink className='navlink' to='/' onClick={handleLogout} id={user ? '' : 'hidden'}> 
                Log out 
            </NavLink>
        </nav>
    );
};

export default Navbar;