import React from "react";
import classes from "./Header.module.css";
import { AiOutlineClose, AiOutlineCreditCard } from "react-icons/ai";
import Button from "../../../../../components/basic/Button";

export function Header({closeModal, title}) {
  return (
    <div className={classes.header}>
      <div className={classes.title_wrapper}>
        <div><AiOutlineCreditCard className={classes.icons} /></div>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.form_close}>
        <Button
          onClick={closeModal}
          variant="just_icon"
          icon={<AiOutlineClose />}>
        </Button>
      </div>
    </div>
  );
};

