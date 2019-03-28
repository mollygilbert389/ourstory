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