import React from "react";

export default function Button({children, startIcon, endIcon, color, variant='text', ...props}) {
    return (
        <button
            style={{
            padding: '6px 12px',
            cursor: 'pointer'
        }}
            {...props}
        >
            {startIcon && <div>{startIcon}</div>}
            {children}
            {endIcon && <div>{endIcon}</div>}
        </button>
    )
}