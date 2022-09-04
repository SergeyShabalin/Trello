import React from 'react';
import classes from './styles/Button.module.css'

export default function Button({label, icon, variant, children}) {

    return (

        <div className={classes.button}>
            <button className= {classes[variant]}>
                <div className={classes.icon}>{icon}</div>
                <div className={classes.label}>{label}</div>
                {children}
            </button>
        </div>
    );
};

