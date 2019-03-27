import React from "react";
import "./style.css";

const TextBox = (props) => {
    return (
    <div className="textBoxDiv">
    <p className="direction">Please add your sentance here</p>
    <input className="textbox" type="text"/>
    
    <div><button className="submit">Submit</button></div>
    </div>
    )
}

export default TextBox;