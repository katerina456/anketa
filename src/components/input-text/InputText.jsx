import React from "react";
import classes from "./style.module.css"

function InputText( {placeholder, id, max, value, handleChange, pattern} ) {
  function checkValue(event) {
    let str = event.target.value;

    const regex = new RegExp(pattern, 'i');

    let result = regex.test(str);

    if (result) {
      handleChange && handleChange(event)
    }
  }

  return (
    <input type="text" className={classes.input} 
          id={id} placeholder={placeholder} 
          name={id} 
          maxLength={max} value={value} 
          onChange={(event) => checkValue(event)}
    />
  )
}

export default InputText;