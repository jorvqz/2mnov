import React from "react";
import logo from './icons8-heart-64.png';

function Button(props) {
  return <button style={{ 
    border: 'none',
    background: 'node',
    width: '600px'
    }} ><img src={logo} alt="my image" onClick={props.click} />{props.name}</button>
}

export default Button;
