import React from 'react';
import './NavBar.css';
import {connect} from 'react-redux';

function NavBar({setRover}) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Api NASA</a>

  <div className="collapse navbar-collapse" >
    <div className="navbar-nav mr-auto mt-2 mt-lg-0" id="Rovers">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => setRover("Curiosity")}>Curiosity</button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => setRover("Opportunity")}>Opportunity</button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => setRover("Spirit")}>Spirit</button>
    </div>
  </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    </div>
    )
}
const mapStateToProps = state => {
    return {
      rover: state.rover,
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)