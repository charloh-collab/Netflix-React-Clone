import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from './images/Netflix-Logo.png';
import Avatar from './images/avatar.png';

function Nav() {


const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
    
        } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src={logo}
            alt='Netflix Logo'
            />
               <img
            className="nav__avatar"
            src={Avatar}
            alt='Avatar Logo'
            />
        </div>
    )
}

export default Nav
