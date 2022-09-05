import React from 'react';
import classes from './styles/Icon.module.css'


export default function Icon ({icon}) {
    return (
        <div>
            <div className={classes.icon}>{icon}</div>
        </div>
    );
};
