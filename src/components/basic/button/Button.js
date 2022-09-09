import React from 'react';
import classes from './styles/Button.module.css'

export default function Button({label,icon, startIcon, error, endIcon, variant= "text", disabled,color, children, onClick, ...props}) {

    return (

        <div className={classes.button_container}>
            <button disabled={disabled}
                    onClick={onClick}
                {...props}
                    className={`${classes[variant]} ${classes[color]} ${classes.button}`}
                    >
                {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
                {icon ? <div className={classes.only_icon}>{icon}</div> : null}
                {label ? <div className={classes.label}>{label}</div> : null}
                {children}
                {endIcon ? <div className={classes.endIcon}>{endIcon}</div> : null}
            </button>
        </div>
    );
};

