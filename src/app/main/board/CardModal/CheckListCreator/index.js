import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../../../components/basic/Button";
import { NewTaskAdd } from "../../../../../store/cards/asyncActions";
import Editor from "./Editor";
import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";
import classes from "./CheckListCreator.module.css";

export default function CheckListCreator({ cardId, columnId }) {

  const [taskValue, setTaskValue] = useState("");
  const {contextOpen, contextClose, isContext} = useOpenCloseContext()
  const dispatch = useDispatch();

  function addNewTask() {
    dispatch(NewTaskAdd(cardId, taskValue, columnId));
    contextClose();
  }

  function getTaskValue({ target }) {
    setTaskValue(target.value);
  }

  function addTaskKeyDown(e) {
    if (e.keyCode === 13) addNewTask();
  }

  if (!isContext) return (
    <div className={classes.main_wrapper}>
      <Button
        onClick={contextOpen}
        variant="outlined"
        label="Добавить задачу" />
    </div>
  );

  return (
    <div className={classes.main_wrapper}>
      <Editor
        addTaskKeyDown={addTaskKeyDown}
        addNewTask={addNewTask}
        addMenuClose={contextClose}
        getTaskValue={getTaskValue}
      />
    </div>
  );
}

