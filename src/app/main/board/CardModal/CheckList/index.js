import React, { useState, useRef } from "react";
import Checkbox from "../../../../../components/basic/Сheckbox";
import classes from "./CheckList.module.css";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";


export default function CheckList({task, done}) {

  const [isEditCheckbox, setIsEditCheckbox] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, closeEditCheckbox);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }



  function saveInEnter(e){
    if (e.keyCode === 13) {
      closeEditCheckbox();
    }
  }

  function saveCheckboxValue(){
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
                      onClick={saveCheckboxValue}/>
            </div>
          </div>

          : <span onClick={openEditChecklist} className={`${classes.checkbox_title}`}>
          {task}
      </span>
        }
      </div>


    </div>
  );
}

