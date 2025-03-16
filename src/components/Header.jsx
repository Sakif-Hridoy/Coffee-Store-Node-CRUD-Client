import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('User logged out'))
            .catch(err => console.error(err));
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Coffee Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className="font-bold" to="/">Home</NavLink></li>
                    <li><NavLink className="font-bold" to="/addCoffee">Add Coffee</NavLink></li>
                    <li><NavLink className="font-bold" to="/users">Users</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <span className="mr-3 font-bold">{user.displayName || user.email}</span>
                        <button onClick={handleLogout} className="btn btn-sm btn-error">Logout</button>
                    </>
                ) : (
                    <NavLink className="btn btn-sm btn-primary" to="/signin">Sign In</NavLink>
                )}
                <NavLink className="btn btn-sm ml-2" to="/signup">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Header;
