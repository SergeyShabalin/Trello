import React from 'react';
import classes from './styles/Input.module.css'


export default function Input({value, rows = 1, cols, onChange, iconLeft, iconRight, children, ...props}) {


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
                <div className={classes.input_container}>
                    {iconLeft && iconLeft}
                    <input type="text"
                      onChange={onChange}
                           className={classes.input}
                           defaultValue={value}
                    />
                    {iconRight && iconRight}
                </div>


            }
        </div>
    );
};

