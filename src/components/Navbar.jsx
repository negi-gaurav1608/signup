import { NavLink } from 'react-router-dom'
import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
   <>
   <header>
    <div className='container'>
        <div className='logo'>
            <a href="/">Abhinav</a>
        </div>

        <nav>
            <div className='logo'>
                <ul >
                    <li ><NavLink to="/">Home</NavLink></li>
                    <li ><NavLink to="/about">About</NavLink></li>
                    <li ><NavLink to="/contact">Contact</NavLink></li>
                    <li ><NavLink to="/service">Service</NavLink></li>
                    <li ><NavLink to="/register">Register</NavLink></li>
                    <li ><NavLink to="/login">Login</NavLink></li>
                    
                </ul>
            </div>
        
        </nav>
    </div>

    
   </header>
   </>
  )
}

export default Navbar
