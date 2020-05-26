import React from 'react';
import '../styles/square.css';

export const Square = (props) => {
    return (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
  }