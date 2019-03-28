import React from "react";
import "./style.css";
import SignOut from "../SignOut";

function Navbar(props) {
    return (
      <div>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className = "game navbar-brand game" href="/">Our Story</a>
          <div className = "mr-auto">
  
          </div>
          <h3 className="navbar-brand justify-content-center">
              {props.message}
            </h3>
          <div className = "navbar-brand justify-content-end">
          <SignOut
          signOut = {props.signOut}
          isSignedOut = {props.isSignedOut}
          />
            {/* <h3 className = "score">
            <a className = "game" className ="navbar-brand game" href="/">Login</a>
            </h3> */}
          </div>
      </nav>
      </div>
    )
  };
  
  export default Navbar;