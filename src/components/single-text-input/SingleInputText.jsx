import React from "react";
import InputText from "../input-text/InputText";
import classes from "./style.module.css"

function SingleInputText( {text, placeholder, id, max, value, handleChange, pattern} ) {
  return (
    <div className={classes.InputText}>
        <label htmlFor={id} className={classes.label}>{text}</label>

        <InputText placeholder={placeholder} id={id} max={max} value={value} 
            handleChange={handleChange} pattern={pattern}
        />

        <p className={classes.tip}>
          Tip {value === '' && 
                <span className={classes.mistake}>Please enter something in this field</span>
              }
        </p>
    </div>
  )
}

export default SingleInputText;