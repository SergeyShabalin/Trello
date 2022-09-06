import React from 'react';
import Icon from "./icon/Icon";
import classes from './styles/Button.module.css'

export default function Button({label, icon, startIcon, endIcon, variant, disabled, onClick}) {

    return (

        <div className={classes.button}>

            <button disabled={disabled}
                    onClick={onClick}
                    className={classes[variant]}
                    >
                {startIcon ? <div className={classes.startIcon}>{startIcon}</div> : null}
                {icon ? <div className={classes.only_icon}>{icon}</div> : null}
                {label ? <div className={classes.label}>{label}</div> : null}
                {endIcon ? <div className={classes.endIcon}>{endIcon}</div> : null}

            </button>
        </div>
    );
};

