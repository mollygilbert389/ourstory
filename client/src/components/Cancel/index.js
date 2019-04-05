import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Do not remove Router and Route here. Even though they aren't called on they are needed for the Link to work

function Cancel() {
    return(
            <div className="cancel" style={{float: "right"}}>
                <Link to="/" role="button" className="btn btn-danger">
                <i className="material-icons">cancel</i> 
                </Link>
            </div>
    )
}

export default Cancel