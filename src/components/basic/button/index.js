import React from "react";

import classes from "./Button.module.css";

export default function Button({
                                 label,
                                 icon,
                                 startIcon,
                                 endIcon,
                                 variant = "text",
                                 disabled,
                                 color,
                                 variety = false,
                                 children,
                                 onClick,
                                 fullSize = false,
                                 opacity = false,
                                 ...props
                               }) {

  return (
    <div className={classes.button_container}>
      <button disabled={disabled}
              onClick={onClick}
              {...props}
              className={`${classes[variant]}
                     ${fullSize && classes.fullSize} 
                     ${opacity && classes.opacity} 
                     ${classes[color]}
                     ${variety && classes.sized} 
                     ${classes.button}`}
      >
        {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
        {icon && <div className={classes.only_icon}>{icon}</div>}
        {label && <span className={classes.label}>{label}</span>}
        {children}
        {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
      </button>
    </div>
  );
}
