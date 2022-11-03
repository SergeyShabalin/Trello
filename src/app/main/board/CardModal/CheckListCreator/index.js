import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../../components/basic/Button";
import { NewTaskAdd } from "../../../../../store/cards/asyncActions";
import useOpenAddMenu from "./useOpenAddMenu";
import Editor from "./Editor";
import classes from "./CheckListCreator.module.css";

export default function CheckListCreator({ cardId, columnId }) {

  const [taskValue, setTaskValue] = useState("");
  const { isAddMenu, addMenuOpen, addMenuClose } = useOpenAddMenu();
  const dispatch = useDispatch();

  function addNewTask() {
    dispatch(NewTaskAdd(cardId, taskValue, columnId));
    addMenuClose();
  }

  function getTaskValue({ target }) {
    setTaskValue(target.value);
  }

  function addTaskKeyDown(e) {
    if (e.keyCode === 13) addNewTask();
  }

  if (!isAddMenu) return (
    <div className={classes.main_wrapper}>
      <Button
        onClick={addMenuOpen}
        variant="outlined"
        label="Добавить задачу" />
    </div>
  );

  return (
    <div className={classes.main_wrapper}>
      <Editor
        addTaskKeyDown={addTaskKeyDown}
        addNewTask={addNewTask}
        addMenuClose={addMenuClose}
        getTaskValue={getTaskValue} />
    </div>
  );
}

