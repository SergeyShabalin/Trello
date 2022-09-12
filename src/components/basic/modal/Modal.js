import React, {useEffect, useMemo} from 'react'
import {createPortal} from "react-dom";

import classes from './styles/Modal.module.css'

const modalRootElement = document.querySelector('#modal')

export default function Modal({children, open, onClose}) {

    const element = useMemo(() => document.createElement("div"), [])

    useEffect(() => {
        modalRootElement.appendChild(element)

        return () => {
            modalRootElement.removeChild(element)
        }
    }, [])

    if (open) {
        return createPortal(
            <div className={classes.modal_background} onClick={onClose}>
                <div className={classes.modal_card}>{children}</div>
            </div>
            , element)
    }
    return null
};

