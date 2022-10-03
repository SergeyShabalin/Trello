import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles/Button.module.css'

export default function Button({
                                   label,
                                   icon,
                                   startIcon,
                                   endIcon,
                                   variant = "text",
                                   disabled,
                                   color,
                                   variety,
                                   children,
                                   onClick,
                                    size,
                                   ...props
                               }) {

    return (
        <div className={classes.button_container}>
            <button disabled={disabled}
                    onClick={onClick}
                    {...props}
                    className={`${classes[variant]} ${classes[size]} ${classes[color]} ${classes[variety]} ${classes.button}`}
            >
                {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
                {icon && <div className={classes.only_icon}>{icon}</div>}
                {label && <div className={classes.label}>{label}</div>}
                {children}
                {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    icon: PropTypes.object,
    startIcon: PropTypes.object,
    endIcon: PropTypes.object,
    variety: PropTypes.string,
}


