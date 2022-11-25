import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { TaskDelete, updateTaskTitle, updateTaskValue } from "../../../../../store/cards/asyncActions";
import Checkbox from "../../../../../components/basic/Сheckbox";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";
import Editor from "./Editor";
import classes from "./CheckList.module.css";

export default function CheckList({ task, done, _id, cardId, columnId }) {

  const [taskTitle, setTaskTitle] = useState(task);
  const [isChecked, setChecked] = useState(done);
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, contextClose);

  function getTaskTitle({ target }) {
    setTaskTitle(target.value);
  }

  function changeTaskDone({ target }) {
    const checked = target.checked;
    setChecked(checked);
    dispatch(updateTaskValue(checked, _id, cardId, columnId));
  }

  function saveCheckboxValue(e) {
    if (!e.keyCode || e.keyCode === 13) {
      dispatch(updateTaskTitle(taskTitle, _id));
      contextClose();
    }
  }

  function deleteTask() {
    dispatch(TaskDelete(cardId, _id, columnId));
  }

  if (!isContext) return (
    <div className={classes.checkbox} ref={ref}>
      <Checkbox checked={isChecked} onChange={changeTaskDone} />
      <div className={classes.checkbox_content} onClick={contextOpen}>
             <span
               className={isChecked ? `${classes.checkbox_title_none}`
                 : `${classes.checkbox_title_done}`}>
                {taskTitle}
            </span>
      </div>
      <div className={classes.delete_btn}>
        <div className={classes.delete_btn_wrapper}>
          {!isChecked &&
            <Button
              onClick={deleteTask}
              variant="just_icon"
              icon={<MdClear />}
            />}
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.checkList_wrapper}>
      <Editor
        getTaskTitle={getTaskTitle}
        saveCheckboxValue={saveCheckboxValue}
        taskTitle={taskTitle}
        closeEditCheckbox={contextClose} />
    </div>
  );
}

