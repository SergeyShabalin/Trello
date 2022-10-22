import React, {useEffect, useMemo, useState} from 'react'
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';
import classes from './Modal.module.css'


const modalRootElement = document.querySelector('#modal')
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

export default function Modal({children,open, onClose, coordinates =
                                      {top: windowHeight / 2, left: windowWidth / 2}}) {

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
            <div className={classes.modal_background} onClick={closeModal}>
                {  coordinates ?     <div className={classes.modal_card}  style={{
                    position: "absolute",
                    left: coordinates.left - 230,
                    top: coordinates.top - 20
                }}> {children}</div>
                    : <div className={classes.modal_card}>
                        {children}
                    </div> }
            </div>
            , element)
    }
    return null
};

Modal.propTypes = {
    open: PropTypes.bool
}