import React from "react";
import classes from "./style.module.css"

function Radio( {text, name, id, handleChange, checked} ) {
  return (
    <label className={classes.Radio} htmlFor={id}>
      <input type="radio" name={name} id={id} 
             onChange={handleChange} value={text} checked={checked}
      />
      <span>{text}</span>
    </label>
  )
}

export default Radio;