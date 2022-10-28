import React from "react";
import PropTypes from "prop-types";
import classes from "./Checkbox.module.css";

export default function Checkbox({ label, variant = "text", disabled=false, ...props }) {
 function getValue({target}){
   console.log(target.value);
 }

  return (
    <div>

      <div className={disabled ? `${classes.disabled}  ${classes.checkbox_container} ${classes[variant]}`
        : `${classes.checkbox_container} ${classes[variant]}`}>
        <input
          disabled={disabled}
          type="checkbox"
          className={classes.custom_checkbox}
          {...props} />

        {label && <span className={classes.label}>{label}</span>}
      </div>
    </div>

  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool
};

