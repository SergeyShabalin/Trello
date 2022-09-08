import React from 'react';
import classes from './styles/Input.module.css'


export default function Input({value, rows, cols, onChange}) {


    return (
        <div className={classes.input}>
            {rows > 1 ?
                <textarea
                    className={classes.text_area}
                    rows={rows}
                    cols={cols}
                    defaultValue={value}
                    onChange={onChange}
                />
                :
                <input type="text"
                       value={value}
                       onChange={onChange}
                />
            }
        </div>
    );
};

