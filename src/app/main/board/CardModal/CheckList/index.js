import React from "react";
import Checkbox from "../../../../../components/basic/Сheckbox";
import classes from "./CheckList.module.css";

export default function CheckList() {
  return (
    <div className={classes.checkList_wrapper}>
      <Checkbox
        label="Задача 1 "
        variant="contained"
      />
      <Checkbox
        label="Задача 2 "
        variant="contained"
      />
    </div>
  );
}

