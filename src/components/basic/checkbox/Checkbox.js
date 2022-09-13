import React from 'react';
import classes from './styles/Checkbox.module.css'

export default function Checkbox({label, variant, disabled, ...props}) {
    return (
        <div>
            {label  ?
                <div className={ disabled ? `${classes.disabled}  ${classes.checkbox_container}`
                    : classes.checkbox_container }>
                    <input
                       disabled={disabled}
                        type={"checkbox"}
                        className={classes.checkbox_label}
                        {...props}/>
                    <div className={classes.label}>{label}</div>
                </div>
                :<div>
                    <input
                        type={"checkbox"}
                        className={classes.checkbox}
                        {...props}
                    />
                </div>
            }
        </div>

    );
};

