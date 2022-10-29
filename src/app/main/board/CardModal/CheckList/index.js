import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { TaskDelete, updateTaskTitle, updateTaskValue } from "../../../../../store/cards/asyncActions";
import Checkbox from "../../../../../components/basic/Сheckbox";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./CheckList.module.css";


export default function CheckList({ task, done, _id, cardId }) {

  const [isEditCheckbox, setIsEditCheckbox] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task);
  const [isChecked, setChecked] = useState(done);

//TODO обновить значок чекеда только после ответа от сервера
  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, closeEditCheckbox);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }

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


  return (
    <div className={classes.checkList_wrapper}>
      <div className={classes.checkbox} ref={ref}>
        <Checkbox checked={isChecked} onChange={changeTaskDone} />
        {isEditCheckbox
          ? <div className={classes.checkbox_editor}>
            <Input
              rows={3}
              cols={58}
              autoFocus
              onChange={getTaskTitle}
              onKeyDown={saveCheckboxValue}
              variant="transparent"
              container="custom"
              placeholder="Введите заголовок карточки"
              value={taskTitle}
            />
            <div className={classes.save_edit_btn}>
              <Button
                variant="contained"
                label="Сохранить"
                color="blue"
                variety
                onClick={saveCheckboxValue}
              />
            </div>
          </div>
          : <div className={classes.checkbox_content} onClick={openEditChecklist}>
             <span
               className={isChecked ? `${classes.checkbox_title_none}`
                 : `${classes.checkbox_title_done}`}>
                {taskTitle}
            </span>
          </div>
        }
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
    </div>
  );
}

