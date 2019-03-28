import React from "react";
import "./style.css";

// const TextBox = (props) => {

//     return (
//         <div className="textBoxDiv">
//             <p className="direction">Please add your sentance here</p>
//             <input className="textbox" type="text" />

//             <div><button className="submit">Submit</button></div>
//         </div>
//     )
// }
//
// export default TextBox;

export function TextBox(props) {
    return (
        <div id="text" className="form-group">
            <textarea maxlength="160" className="form-control" rows="5" {...props} />
        </div>
    );
}
export function Btn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
            Submit
        </button>
    );
}