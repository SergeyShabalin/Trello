import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { TaskDelete, updateTaskTitle, updateTaskValue } from "../../../../../store/cards/asyncActions";
import Checkbox from "../../../../../components/basic/Сheckbox";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./CheckList.module.css";
import Editor from "./Editor";

function useOpenCheckListEditor() {
  const [isEditCheckbox, setIsEditCheckbox] = useState(false);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }

  return {
    isEditCheckbox,
    openEditChecklist,
    closeEditCheckbox
  };
}

export default function CheckList({ task, done, _id, cardId }) {
//TODO написать свои хуки(например модалка)
  // const [isEditCheckbox, setIsEditCheckbox] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task);
  const [isChecked, setChecked] = useState(done);
  const { isEditCheckbox, openEditChecklist, closeEditCheckbox } = useOpenCheckListEditor();
  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, closeEditCheckbox);

  // function openEditChecklist() {
  //   setIsEditCheckbox(true);
  // }
  //
  // function closeEditCheckbox() {
  //   setIsEditCheckbox(false);
  // }

  function getTaskTitle({ target }) {
    setTaskTitle(target.value);
  }

  function changeTaskDone({ target }) {
    const checked = target.checked;
    setChecked(checked);
    dispatch(updateTaskValue(checked, _id));
  }

  function saveCheckboxValue(e) {
    if (!e.keyCode || e.keyCode === 13) {
      dispatch(updateTaskTitle(taskTitle, _id));
      closeEditCheckbox();
    }
  }

  function deleteTask() {
    dispatch(TaskDelete(cardId, _id));
  }


  if (!isEditCheckbox) return (
    <div className={classes.checkbox} ref={ref}>
      <Checkbox checked={isChecked} onChange={changeTaskDone} />
      <div className={classes.checkbox_content} onClick={openEditChecklist}>
             <span
               className={isChecked ? `${classes.checkbox_title_none}`
                 : `${classes.checkbox_title_done}`}>
                {taskTitle}
            </span>
      </div>
      <div className={classes.delete_btn}>
        <div className={classes.delete_btn_wrapper}>
          <Button
            onClick={deleteTask}
            variant="just_icon"
            icon={<MdClear />}>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.checkList_wrapper}>
      <Editor isChecked={isChecked}
              changeTaskDone={changeTaskDone}
              isEditCheckbox={isEditCheckbox}
              getTaskTitle={getTaskTitle}
              saveCheckboxValue={saveCheckboxValue}
              taskTitle={taskTitle}
              closeEditCheckbox={closeEditCheckbox} />
    </div>
  );
}

