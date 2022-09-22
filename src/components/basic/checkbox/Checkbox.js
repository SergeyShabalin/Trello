import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles/Checkbox.module.css'

export default function Checkbox({label, variant = 'text', disabled, ...props}) {
    return (
        <div>

            <div className={disabled ? `${classes.disabled}  ${classes.checkbox_container} ${classes[variant]}`
                : `${classes.checkbox_container} ${classes[variant]}`}>
                <input
                    disabled={disabled}
                    type="checkbox"
                    className={classes.checkbox_label}
                    {...props}/>
                {label && <div className={classes.label}>{label}</div>}
            </div>
        </div>

    );
};

Checkbox.propTypes={
    label: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool
}

