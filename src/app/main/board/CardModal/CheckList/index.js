import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { TaskDelete } from "../../../../../store/cards/asyncActions";
import Checkbox from "../../../../../components/basic/Сheckbox";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./CheckList.module.css";

export default function CheckList({ task, done, checkListId, cardId }) {

  const [isEditCheckbox, setIsEditCheckbox] = useState(false);

  const ref = useRef();
  const dispatch = useDispatch()
  useOnClickOutside(ref, closeEditCheckbox);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }

  function saveInEnter(e) {
    if (e.keyCode === 13) {
      closeEditCheckbox();
    }
  }

  function saveCheckboxValue() {
    closeEditCheckbox();
  }

  function deleteTask(){
    dispatch(TaskDelete(cardId, checkListId));
  }

  return (
    <div className={classes.checkList_wrapper}>
      <div className={classes.checkbox} ref={ref}>
        <Checkbox />
        {isEditCheckbox
          ? <div className={classes.checkbox_editor}>
            <Input
              rows={3}
              cols={58}
              autoFocus
              onKeyDown={saveInEnter}
              variant="transparent"
              container="custom"
              placeholder="Введите заголовок карточки"
              value={task}
            />
            <div className={classes.save_edit_btn}>
              <Button variant="contained"
                      label="Сохранить"
                      color="blue"
                      variety={true}
                      onClick={saveCheckboxValue} />
            </div>
          </div>

          :
          <div className={classes.checkbox_content} onClick={openEditChecklist}>
             <span
               className={done ? `${classes.checkbox_title_none}`
                 : `${classes.checkbox_title_done}`}>
                {task}
            </span>
          </div>

        }
        <div className={classes.delete_btn}>
          <div className={classes.delete_btn_wrapper}>
            <Button
              onClick={deleteTask}
              variant={"just_icon"}
              icon={<MdClear />}>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

