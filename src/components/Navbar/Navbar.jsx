import { Link, NavLink} from "react-router-dom";
import React from "react";

const Navbar= ({user}) => {

    return (
        <nav className="navbar navbar-expand-lg ">  
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
          <img className="logoImage" src={"./images/logo.png"} alt="logo Lost In Translation" />
          </Link>
          <h6 className="title">Lost In Translation</h6>
          <div >
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
          
              {!user &&(
              <React.Fragment>
            
              
              </React.Fragment>)}


              {user &&(
              <React.Fragment>
              <NavLink className="nav-link " to="/profile">
               {user.name}
              </NavLink>

              <NavLink className="nav-link " to="/logout">
               Logout
              </NavLink>

              </React.Fragment>)}

            </div>
          </div>
        </div>
      </nav>
    );




}













export default Navbar;