import React from "react";
import "./style.css";
import SignOut from "../SignOut";
import Radium from 'radium'

const style= {
  top: '0',
  position: 'absolute',
  width: '100%',
}

function Navbar(props) {
    return (
      <div>
          <nav style ={style} className ="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className = "navbar-brand" href="/">Our Story</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="https://mollygilbert389.github.io/team/.">Meet the Team<span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
          <div className = "mr-auto">
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Share</a>
          </div>
          <h3 className="navbar-brand justify-content-center">
              {props.message}
            </h3>
          <div className = "navbar-brand justify-content-end">
          <SignOut
          signOut = {props.signOut}
          isSignedOut = {props.isSignedOut}
          />
          </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )
  };
  
  export default Radium(Navbar);