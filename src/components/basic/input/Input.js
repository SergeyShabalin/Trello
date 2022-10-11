import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles/Input.module.css'


export default function Input({
                                  value,
                                  rows = 1,
                                  cols,
                                  placeholder,
                                  onChange,
                                  label,
                                  disabled,
                                  iconLeft,
                                  iconRight,
                                  variant = 'input',
                                  container = 'input_container',
                                  ...props
                              }) {

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
                        {...props}
                    />
                </div>
                :
                <div>
                    {label && <div className={classes.label}>{label}</div>}

                    <div className={`${classes[container]}`}>
                        {iconLeft && iconLeft}
                        <input type="text"
                               disabled={disabled}
                               placeholder={placeholder}
                               onChange={onChange}
                               className={`${classes[variant]}`}
                               defaultValue={value}
                               {...props}
                        />
                        {iconRight && iconRight}
                    </div>
                </div>
            }
        </div>
    );
};

Input.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.object,
    iconRight: PropTypes.object,
    label: PropTypes.string
}




