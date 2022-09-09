import React from 'react';
import classes from './styles/Input.module.css'


export default function Input({value, rows = 1, cols, onChange, icon, children}) {


    return (
        <div>
            {rows > 1 ?
                <div>
                <textarea
                    className={classes.text_area}
                    rows={rows}
                    cols={cols}
                    defaultValue={value}
                    onChange={onChange}
                />
                </div>
                :
                <div className={classes.text}>
                    {icon && icon}
                    <input type="text"
                           className={classes.input}
                           defaultValue={value}
                    />
                </div>


            }
        </div>
    );
};

