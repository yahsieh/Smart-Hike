import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";
import '../css/NavbarCSS.scss';

const Navbar = () => {
    const { user, logout } = useUserAuth();

    // Logout Handler
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    }

    return(
        // id={user ? 'hidden' or '' : 'hidden' or ''}
        // Hides navlink content based on user authentication context
        <nav className='navbar'>
            <div id='navlogo'>
                LOGO
            </div>
            <NavLink className='navlink' to='/' id='home'>
                Home
            </NavLink>
            <NavLink className='navlink' to='/preference' id={user ? '' : 'hidden'}>
                Search
            </NavLink>
            <NavLink className='navlink' to='/hikingclothes' id={user ? '' : 'hidden'}>
                Hiking Clothes
            </NavLink>

            <NavLink className='navlink' to='/settings' id={user ? '' : 'hidden'}>
                Settings
            </NavLink>

            <NavLink className='navlink' to='/login' id={user ? 'hidden' : 'login'}>
                Login
            </NavLink>
            <NavLink className='navlink' to='/signup' id={user ? 'hidden' : 'signup'}>
                Signup
            </NavLink>
            <NavLink className='navlink' to='/account' id={user ? '': 'hidden'}>
                Account
            </NavLink>
            <NavLink className='navlink' to='/' onClick={handleLogout} id={user ? '' : 'hidden'}> 
                Log out 
            </NavLink>
        </nav>
    );
};

export default Navbar;