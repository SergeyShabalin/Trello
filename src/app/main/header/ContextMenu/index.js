import React, { useRef } from "react";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import classes from "./ContextMenu.module.css";


export default function ContextMenu({  closeContextMenu, content, title}) {

  const ref = useRef();
  useOnClickOutside(ref, closeContextMenu);

  return (
    <div ref={ref} className={classes.contextMenuWrapper}>
      <span className={classes.title}>{title}</span>
      <hr/>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

