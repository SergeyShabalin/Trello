import React, { useState, useRef } from "react";
import Checkbox from "../../../../../components/basic/Сheckbox";
import classes from "./CheckList.module.css";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";


export default function CheckList() {

  const [isEditCheckbox, setIsEditCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState('');
  const ref = useRef();
  useOnClickOutside(ref, closeEditCheckbox);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }

  function getCheckboxValue({target}){
    setCheckboxValue(target.value);
  }

  function saveInEnter(e){
    if (e.keyCode === 13) {
      closeEditCheckbox();
      console.log(checkboxValue);
    }
  }

  function saveCheckboxValue(){
      console.log(checkboxValue);
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
              onChange={getCheckboxValue}
              variant="transparent"
              container="custom"
              placeholder="Введите заголовок карточки"
              value="Описание"
            />
            <div className={classes.save_edit_btn}>
              <Button variant="contained"
                      label="Сохранить"
                      color="blue"
                      onClick={saveCheckboxValue}/>
            </div>
          </div>

          : <span onClick={openEditChecklist} className={`${classes.checkbox_title}`}>
          Задача 1 длинный текст для проверки того как это будет выглядеть в таком виде
      </span>
        }
      </div>

    </div>
  );
}

