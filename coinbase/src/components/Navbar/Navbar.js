import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import button from "../../assets/Button.png";



const Navbar = ()=> {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm navbar-light bg-default">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link class="nav-link active"   to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Sell Bitcoin/ Giftcard
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link class="dropdown-item" to="#">Sell Bitcoin</Link>
                        <Link class="dropdown-item" to="#">Sell Giftcard</Link>
                    </div>
                </li>
                <li>
                    <Link to="">
                        <img src={button} alt="" />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>



    
   
    </Fragment>
 
        
        )
    }


export default Navbar
