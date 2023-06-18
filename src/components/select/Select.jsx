import React from "react";
import classes from "./style.module.css"

function Select( {id, value, handleChange} ) {
  return (
    <div className={classes.box}>
        <label htmlFor={id} className={classes.label}>
            Sex
        </label>
        <select name={id} id={id} className={classes.select} 
                value={value} onChange={handleChange}
        >
            <option className={classes.option} 
                value="man" id="field-sex-option-man">
                    man
            </option>
            <option className={classes.option} 
                value="woman" id="field-sex-option-woman">
                    woman
            </option>
        </select>
    </div>
  )
}

export default Select;