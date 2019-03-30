import React from "react";


export function Definition(props) {
  return (
    <div>
      <ol>
        {props.words.map((
                    word => (
                          <li>{word}</li>
                    )))}
      </ol>
    </div>
  );
}