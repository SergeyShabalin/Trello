import React, { useState, useRef } from "react";
import Checkbox from "../../../../../components/basic/Сheckbox";
import classes from "./CheckList.module.css";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import { GoKebabHorizontal } from "react-icons/go";
import DeleteCheckTask from "./DeleteCheckTask";


export default function CheckList({ task, done }) {

  const [isEditCheckbox, setIsEditCheckbox] = useState(false);

  const ref = useRef();
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
          <div className={classes.checkbox_content}>
             <span onClick={openEditChecklist}
                   className={done ? `${classes.checkbox_title_none}` : `${classes.checkbox_title_done}`}>
                {task}
            </span>

          </div>

        }
        <DeleteCheckTask/>
      </div>
    </div>
  );
}

