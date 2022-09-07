import React from 'react';
import classes from './styles/Input.module.css'


export default function Input({value, variant, rows, cols}) {
    return (
        <div className={classes.input}>
            {variant === 'textarea' ?
                <textarea
                    className={classes.text_area}
                    rows={rows}
                    cols={cols}
                    defaultValue={value}></textarea>
                :
                <input type="text"
                       value={value}
                />
            }
        </div>
    );
};

