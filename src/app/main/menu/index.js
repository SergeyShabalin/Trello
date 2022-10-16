import React, {useState} from 'react';
import classes from './Menu.module.css'

export default function Menu() {

    const [isActive, setIsActive] = useState(true)

    return (
        <div className={classes.menu}>
            Menu

        </div>
    );
};

