import React, { useState, useRef } from "react";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import classes from "./ContextMenu.module.css";
import Button from "../../../../components/basic/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function ContextMenu({ title, closeContextMenu, allWorkspaces }) {

  const ref = useRef();
  useOnClickOutside(ref, closeContextMenu);


  return (
    <div ref={ref} className={classes.contextMenuWrapper}>
      <div className={classes.header}>
        <span className={classes.title}>{title}</span>
        <div className={classes.btn_close}>
          <Button
            onClick={closeContextMenu}
            variant="just_icon"
            icon={<AiOutlineClose />} />
        </div>
      </div>
      <hr/>
      <div className={classes.content}>
        {allWorkspaces}
      </div>
    </div>
  );
};

