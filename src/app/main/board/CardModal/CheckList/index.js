import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { TaskDelete, updateTaskTitle, updateTaskValue } from "../../../../../store/cards/asyncActions";
import Checkbox from "../../../../../components/basic/Сheckbox";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./CheckList.module.css";
import Editor from "./Editor";
import useOpenCheckListEditor from "./useOpenCheckListEditor";


export default function CheckList({ task, done, _id, cardId, columnId }) {

  const [taskTitle, setTaskTitle] = useState(task);
  const [isChecked, setChecked] = useState(done);
  const { isEditCheckbox, openEditChecklist, closeEditCheckbox } = useOpenCheckListEditor();
  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, closeEditCheckbox);

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
      closeEditCheckbox();
    }
  }

  function deleteTask() {
    dispatch(TaskDelete(cardId, _id, columnId));
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

