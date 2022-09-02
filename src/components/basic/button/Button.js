import React from 'react';
import classes from './styles/Button.module.css'

export default function Button({name, icon}) {

    return (
        <div className= {classes.button}>
            {icon}
            <div className={classes.icon}> </div>
            {name? <button className={classes.text}>{icon}{name}</button> : null}
        </div>
    );
};

