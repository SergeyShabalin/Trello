import React from 'react';
import classes from './styles/Button.module.css'

export default function Button({name, icon}) {

    return (
        <div className={classes.button}>
            <button className={classes.complete}>
                {name ? <div>
                        <div className={classes.icon}>{icon}</div>
                        <div className={classes.text}>{name}</div>
                    </div>

                    :
                    <div className={classes.icon}>{icon}</div>
                }  </button>
        </div>
    );
};

