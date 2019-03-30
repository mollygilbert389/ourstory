import React from "react";
import "./style.css";

// export function TextBox(props) {
//     console.log(props);
//     return (
//         <div className="textBoxDiv">
//             <div id="textarea" className="form-group">
//                 <textarea name="sentence" style={{ display: props.isSignedOut ? 'block' : 'none' }}
//                     id="textarea1" placeholder="Your Contribution ;-) (160 characters max)"
//                     required="true" maxlength="160" rows="5" className="form-control" />
//             </div>

//         </div>
//     )
// }



export function TextBox(props) {
    return (

            <input style={{ display: props.isSignedOut ? 'block' : 'none' }} maxlength="160" className="form-control" {...props} />

    );

}

export function Btn(props) {
    return (
        <button {...props} className="submit" style={{ display: props.isSignedOut ? 'block' : 'none' }}>
            {props.children}
            Submit
        </button>

    );
}
export function Btn1(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10, display: props.isSignedOut ? 'block' : 'none' }} className="btn btn-success">
            {props.children}
            Submit
      </button>

    );
}


