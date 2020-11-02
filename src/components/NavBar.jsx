import React from 'react';

function NavBar() {
    return (
        <div style={{paddingBottom:"5px"}}>
          <nav className="navbar bg-info">
            <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
              <p className="navbar-brand" style={{fontWeight:"bold"}}>Api NASA</p>
            </div>
          <div>
            <p style={{display:"flex", alignSelf:"start", fontWeight:"500"}} >Created by Cordoba, Matias</p>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <a href="https://download848.mediafire.com/6fppalfvrpwg/vuv6g8r6pdqq917/CV+MATIAS+CORDOBA.pdf" style ={{color:"black"}}  >
                <i className="fas fa-file-pdf fa-2x"></i>
              </a>
              <a href="https://github.com/maticordoba7" style ={{color:"black"}} >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/matiascba99/" style ={{color:"black"}} >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          
          </nav>
        </div>
    )
}
    
export default NavBar