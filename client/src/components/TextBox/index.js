import React from "react";
import "./style.css";

const TextBox = (props) => {
    return (
    <div className="textBoxDiv">
    <p>Please add your sentance here</p>
    <input className="textbox" type="text"/>
    </div>
    )
}

export default TextBox;