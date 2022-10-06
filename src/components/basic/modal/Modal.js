import React, {useEffect, useMemo} from 'react'
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';
import classes from './styles/Modal.module.css'


const modalRootElement = document.querySelector('#modal')

export default function Modal({children, open, onClose, variant, coordinates}) {

    const element = useMemo(() => document.createElement("div"), [])

    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element)
            return () => {
                modalRootElement.removeChild(element)
            }
        }
    })

    function closeModal(event) {
        if (event.target == event.currentTarget) {
            onClose()
        }
    }

    if (open) {
        return createPortal(
            <div className={`${classes[variant]}`} onClick={closeModal}>
                {variant === 'context_menu' ? <div style={{
                        position: 'relative', left: coordinates.left + 25,
                        top: coordinates.top + 15
                    }} className={classes.context_card}>{children}</div>
                    :
                    <div className={classes.modal_card}> {children}</div>
                }
            </div>

            , element)
    }
    return null
};

Modal.propTypes = {
    open: PropTypes.bool
}