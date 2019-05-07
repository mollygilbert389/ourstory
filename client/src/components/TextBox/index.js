import React from "react";
import "./style.css";

export function TextBox(props) {
    return (
            <div className="form-group">
            <input name="sentence" maxlength="160" style={{ display: props.isSignedOut ? 'block' : 'none' }}
            id="textarea" placeholder="Your Contribution ;-) (160 characters max)"
            required="true" maxlength="160" rows="5" className="form-control" onChange={props.textChange}{...props} />
        </div>
    );

}

export function Btn1(props) {
    return (
        <button {...props} id="btn1" style={{display: props.isSignedOut ? 'block' : 'none' }}>
            {props.children}
            Submit
      </button>

    );
}


