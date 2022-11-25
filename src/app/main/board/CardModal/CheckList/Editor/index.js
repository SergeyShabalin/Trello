import React, { useRef } from "react";
import classes from "./Editor.module.css";
import Checkbox from "../../../../../../components/basic/Сheckbox";
import Input from "../../../../../../components/basic/Input";
import Button from "../../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../../hooks/UseOnClickOutside";
import { MdClear } from "react-icons/md";

export default function Editor({ getTaskTitle,
                                 saveCheckboxValue,
                                 taskTitle,
                                 closeEditCheckbox
                               }){
  const ref = useRef()
  useOnClickOutside(ref, closeEditCheckbox);

  return (
    <div className={classes.checkbox} ref={ref} >
         <div className={classes.checkbox_editor}>
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
              onClick={saveCheckboxValue}
            />
            <Button
              variant="just_icon"
              icon={<MdClear />}
              onClick={closeEditCheckbox}
            />
          </div>

        </div>
    </div>
  );
};

