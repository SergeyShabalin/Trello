import React, {useState} from "react";
import Checkbox from "../../../../../components/basic/Сheckbox";
import classes from "./CheckList.module.css";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";


export default function CheckList() {

  const[isEditCheckbox, setIsEditCheckbox]= useState(false)

  return (
    <div className={classes.checkList_wrapper} >

    <div className={classes.checkbox}>
      <Checkbox/>
      { isEditCheckbox
        ?  <div className={classes.checkbox_editor}>
          <Input
            rows={3}
            cols={58}
            autoFocus
            variant="transparent"
            container="custom"
            placeholder="Введите заголовок карточки"
            value="Описание"
          />
          <div className={classes.save_edit_btn}>
            <Button variant="contained" label="Сохранить" color="blue" />
          </div>
        </div>

        : <span onClick={()=>setIsEditCheckbox(true)} className={classes.checkbox_title}>
          Задача 1 длинный текст для проверки того как это будет выглядеть в таком виде
      </span>
          }
    </div>

    </div>
  );
}

