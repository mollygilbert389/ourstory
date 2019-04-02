import React, { Component } from "react";
import './style.css'
// import molly from './molly.JPG'
// import hank from './hank.jpg'
import Radium from 'radium'
// import hank from './hank'

const style = {
    height: '300px',
    width: '300px',
    margin: '10px',
    borderRadius: '8px',

}

function Team() {
    return (
      <div className="team">
      {/* <img style={style} src={molly} />
      <img style={style} src={hank} /> */}
      {/* <img src={hank} /> */}
      </div>
    );
  }

export default Radium(Team);