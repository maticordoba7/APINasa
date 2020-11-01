import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalculator, } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
          <nav className="navbar bg-info">
          <p className="navbar-brand" >Api NASA</p>
          <p style={{display:"flex", alignSelf:"start"}} >Created by Cordoba, Matias</p>
          {/* <i class="fab fa-linkedin"></i> */}
          </nav>
        </div>
    )
}
    
export default NavBar