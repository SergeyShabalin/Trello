import React, { useRef } from "react";

import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import classes from "./ContextMenu.module.css";

export default function ContextMenu({ closeContextMenu, content, title, children }) {
  const ref = useRef();
  useOnClickOutside(ref, closeContextMenu);

  return (
    <div ref={ref} className={classes.contextMenuWrapper}>
      <div className={classes.header}>
        <span className={classes.title}>{title}</span>
        <span className={classes.back_btn}>{children}</span>
      </div>
      <hr />
      <div className={classes.content}>{content}</div>
    </div>
  );
};
