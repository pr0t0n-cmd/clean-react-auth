import React from 'react'

import { useAuth } from '../auth/hooks/useAuth';

import { Link } from "react-router-dom";

import './css/navbar.css'

const Navbar = () => {
    let auth = useAuth()
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/room">Room</Link>
                </li>
                <li>
                    {auth.token ? <Link to="/book">Book</Link> : <></>}
                </li>
            </ul>
            <div>
                {auth.token ? <p className="log" onClick={auth.signout}>Logout</p> : <p className='log'><Link to="/login">Login</Link></p>}
            </div>
        </nav>
    )
}

export default Navbar
