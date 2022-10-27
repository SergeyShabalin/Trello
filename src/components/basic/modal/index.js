import React, { useEffect, useMemo, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";


const modalRootElement = document.querySelector("#modal");

const Modal = ({children, open, onClose, coordinates, ref }) => {

  const element = useMemo(() => document.createElement("div"), []);


  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);
      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  function closeModal(event) {
    if (event.target == event.currentTarget) {
      onClose();
    }
  }
// TODO Убрать повтор
  if (!open) return null;
  return createPortal(
    <div className={classes.modal_background} onClick={closeModal}>
      {coordinates ? <div className={classes.modal_card} style={{
          position: "absolute",
          left: coordinates.left - 230,
          top: coordinates.top - 20
        }}> {children}</div>
        : <div ref={ref} className={classes.modal_card}>
          {children}
        </div>}
    </div>, element);
}

Modal.propTypes = {
  open: PropTypes.bool
};

export default Modal