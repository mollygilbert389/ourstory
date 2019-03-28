import React from "react";
import "./style.css";

function TextBox(props) {
    console.log(props);
    return (
        <div className="textBoxDiv">
            <p className="direction">Please add your sentence here</p>
            <input className="textbox" type="text" />

            <div>
                <button onClick={props.addText}>Submit
                </button>
            </div>
        </div>
    )
}

export default TextBox;