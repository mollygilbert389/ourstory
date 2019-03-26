import React from "react";
import "./style.css";
import Login from "../Login";

function SignOut(props) {
  return (
    <Login>
      <div className="SignOut">
        <div>
          <div>Signed In!</div>
          <button onClick={() => this.signOut()}>Sign Out!</button>
        </div>
      </div>
    </Login>
  )
}

export default SignOut;