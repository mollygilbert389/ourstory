import React from "react";
import "./style.css";

function TextBox(props) {
    console.log(props);
    return (
        <div className="textBoxDiv">
            <div id="textarea" className="form-group">
                <textarea name="sentence" style={{display: props.isSignedOut ? 'block' : 'none' }}
                    id="textarea" placeholder="Your Contribution ;-) (160 characters max)"
                    required="true" maxlength="160" rows="5" className="form-control" />
            </div>
            <button {...props} className="submit"style={{display: props.isSignedOut ? 'block' : 'none' }}>
                {props.children}
                Submit
            </button>
        </div>
    )




    // export function TextBox(props) {
    //     return (
    //         <div id="textarea" className="form-group">
    //             <textarea name="sentence"
    //                 id="textarea" placeholder="Your Contribution ;-) (160 characters max)"
    //                 required="true" maxlength="160" rows="5" className="form-control" />
    //         </div>
    //     );

    // }

    // export function Btn(props) {
    //     return (
    //         <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //             {props.children}
    //             Submit
    //         </button>
    //     );
    // }
}
export default TextBox;
