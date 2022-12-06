import React from "react";
import { FiCheckSquare } from "react-icons/fi";

import Slider from "../../../../../../components/basic/Input/Slider";
import classes from "./Title.module.css";

export default function ChecklistTitle({allTask, doneTask}){
  return (
    <>
      <div className={classes.checkbox_title_wrapper}>
      <FiCheckSquare className={classes.icons} />
      <h4 className={classes.checkbox_title}>Чек-лист</h4>
    </div>
      <div className={classes.slider}>
        <Slider
          allTask={allTask}
          doneTask={doneTask}
        />
      </div>
    </>

  );
};
