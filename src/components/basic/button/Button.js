import React from 'react';
import classes from './styles/Button.module.css'

export default function Button({name, icon, type}) {

    return (
        <div className={classes.button}>
            {type === 'complete_right' ?
                <button className={classes.complete}>
                    <div className={classes.text}>{name}</div>
                    <div className={classes.icon}>{icon}</div>
                </button> : null}
            {type === 'complete_left' ?
            <button className={classes.complete}>
                <div className={classes.icon}>{icon}</div>
                        <div className={classes.text}>{name}</div>
            </button> : null}
            {type ==='only_icon' ?
                <button className={classes.complete}>
                    <div className={classes.icon}>{icon}</div>
                </button> : null}

            {type ==='only_text' ?
                <button className={classes.complete}>
                    <div className={classes.text}>{name}</div>
                </button> : null}

        </div>
    );
};

