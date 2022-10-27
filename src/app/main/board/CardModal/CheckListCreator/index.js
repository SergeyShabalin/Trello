import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import Input from "../../../../../components/basic/Input";
import { NewTaskAdd } from "../../../../../store/cards/asyncActions";
import classes from "./CheckListCreator.module.css";


export default function CheckListCreator({ cardId }) {

  const [isAddMenu, setIsAddMenu] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  useOnClickOutside(ref, addMenuClose);

  function addNewTask() {
    dispatch(NewTaskAdd(cardId, taskValue));
    addMenuClose();
  }

  function getTaskValue({ target }) {
    setTaskValue(target.value);
  }

  function addTaskKeyDown(e) {
    if (e.keyCode === 13) addNewTask();
  }

  function addMenuOpen() {
    setIsAddMenu(true);
  }

  function addMenuClose() {
    setIsAddMenu(false);
  }


  return (
    <div className={classes.main_wrapper}>
      {isAddMenu ?
        <div ref={ref}>
          <Input
            rows={3}
            cols={28}
            autoFocus
            onChange={getTaskValue}
            onKeyDown={addTaskKeyDown}
            variant="transparent"
            container="custom"
            placeholder="Добавить задачу"
          />
          <div className={classes.control_button}>
            <div className={classes.btn_add}>
              <Button
                onClick={addNewTask}
                variant="contained"
                label="Добавить" />
            </div>

            <Button
              variant="contained"
              label="Отменить" />
          </div>

        </div>

        :
        <div>
          <Button
            onClick={addMenuOpen}
            variant="outlined"
            label="Добавить задачу" />
        </div>
      }
    </div>
  );
}

