import React from "react";

export function Button(props) {
  return (
    <button {...props} style={{marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}