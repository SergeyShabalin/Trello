import React from 'react';
import Icon from "./icon/Icon";
import classes from './styles/Button.module.css'

export default function Button({label, icon, variant, children}) {

    return (

        <div className={classes.button}>
            <button className={classes[variant]}>
                {icon ?  <Icon icon ={icon}/> : null}
                <div className={classes.label}>{label}{children}</div>
            </button>
        </div>
    );
};

