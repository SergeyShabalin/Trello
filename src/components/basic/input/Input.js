import React from 'react';
import classes from './styles/Input.module.css'


export default function Input({ value, rows = 1, cols, placeholder, onChange, label, disabled, iconLeft, iconRight}) {

    return (
        <div>
            {rows > 1 ?
                <div>
                    {label && <div className={classes.label}>{label}</div>}
                <textarea
                    className={classes.text_area}
                    placeholder={placeholder}
                    rows={rows}
                    cols={cols}
                    defaultValue={value}
                    onChange={onChange}
                />
                </div>
                :
                <div>
                    {label && <div className={classes.label}>{label}</div>}

                    <div className={classes.input_container}>
                        {iconLeft && iconLeft}
                        <input type="text"
                               disabled={disabled}
                               placeholder={placeholder}
                               onChange={onChange}
                               className={classes.input}
                               defaultValue={value}
                        />
                        {iconRight && iconRight}
                    </div>
                </div>
            }
        </div>
    );
};

