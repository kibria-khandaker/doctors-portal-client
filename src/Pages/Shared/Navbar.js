import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate()

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    // const logIn = () => {
    //     navigate('/login')
    // }

    const myMenuList = <>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/appointment"> Appointment </Link></li>
        <li><Link to="/reviews"> Reviews </Link></li>
        <li><Link to="/contact"> Contact</Link></li>
        {
            user && <li><Link to={'/dashboard'}>Dashboard</Link></li>
        }
        <li>
            {
                user
                    ?
                    <button onClick={logout} className="btn bg-neutral text-white">LogOut</button>
                    :
                    // <button onClick={logIn} className="btn bg-neutral text-white">Login</button>
                    <Link to="/login"> Login </Link>
            }
        </li>

        {/* 
        <li tabIndex="0">
            <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><Link to="/about">Submenu 1</Link></li>
                <li><Link to="/about">Submenu 2</Link></li>
            </ul>
        </li> */
        }
    </>
    return (
        <div className="navbar bg-base-100 mx-auto px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {myMenuList}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"> Doctors Portal </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {myMenuList}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1"  htmlFor="dashboard_sidebar"  className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <label htmlFor="dashboard_sidebar" className="btn btn-primary drawer-button lg:hidden">Open</label> */}
            </div>
            {/* <div className="navbar-end">
                <Link to="/about" className="btn">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;