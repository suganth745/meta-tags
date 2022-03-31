import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.png"
import "../styles/header.css"

const Header = () => {
    return (  
        <header>
            <nav>
                <div className="nav-wrapper nav #6200ea deep-purple accent-4">
                    <Link to="/" className="left brand-logo"> 
                        <img src={logo} alt="" /> Opencart
                    </Link>
                    <a href="#!" data-target="sdnav" className="right sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
