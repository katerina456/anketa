import React from "react";
import classes from "./style.module.css"

function Checkbox( {text, id, handleChange, checked} ) {
  return (
    <label className={classes.Checkbox} htmlFor={id}>
      <input type="checkbox" name={id} id={id} checked={checked}
              onChange={handleChange} 
      />
      <span>{text}</span>
    </label>
  )
}

export default Checkbox;