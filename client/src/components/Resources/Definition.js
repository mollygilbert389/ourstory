import React from "react";
import Radium from 'radium'

const style = {
  backgroundColor: 'backgroundColor: rgba(11, 56, 2, 0.801)',
}

export function Definition(props) {
  return (
    <div style={style}>
      <ol>
        {props.words.map((
                    word => (
                          <li>{word}</li>
                    )))}
      </ol>
    </div>
  );
}
