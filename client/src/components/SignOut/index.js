import React from "react";
import "./style.css";
// import Login from "../Login";

function SignOut(props) {
  console.log("signOut");
  return (
  
      <div className="SignOut">
        <div>
          <button onClick={props.signOut} 
          style={{display: props.isSignedOut ? 'block' : 'none' }}>Sign Out!</button>
        </div>
      </div>
  )
}

export default SignOut;