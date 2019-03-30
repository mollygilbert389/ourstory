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
            <div className="stupid">
                <textarea name="sentence" style={{display: props.isSignedOut ? 'block' : 'none' }}
                    id="textarea" placeholder="Your Contribution ;-) (160 characters max)"
                    required="true" maxlength="160" rows="5" className="form-control" />
            </div>
    );

}

export function Btn(props) {
    return (
        <button {...props} className="submit" id="btn1" style={{ display: props.isSignedOut ? 'block' : 'none' }}>
            {props.children}
            Submit
        </button>

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


