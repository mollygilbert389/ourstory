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
        <div id="textarea" className="form-group">
            <textarea name="sentence"
                id="textarea" placeholder="Your Contribution ;-) (160 characters max)"
                required="true" maxlength="160" rows="5" className="form-control" />
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