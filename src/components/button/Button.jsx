import React from "react";
import classes from "./style.module.css"

function Button( {text, id, handleclick} ) {
  let button = id === 'button-back' ? classes.buttonWhite : classes.buttonBlue;

  return (
    <button className={button} id={id} onClick={handleclick && handleclick}>
        <span className={classes.span}>{text}</span>
    </button>
  );
}

export default Button;