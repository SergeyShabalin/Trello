import React, { useRef } from "react";
import { MdClear } from "react-icons/md";

import Input from "../../../../../../components/basic/Input";
import Button from "../../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../../hooks/UseOnClickOutside";
import classes from "./Editor.module.css";

export default function Editor({
                                 saveInEnter,
                                 getDescriptionValue,
                                 description,
                                 saveDescriptionValue,
                                 closeEditDescription
                               }) {

  const ref = useRef();
  useOnClickOutside(ref, closeEditDescription);

  return (
    <div className={classes.textarea} ref={ref}>
      <Input
        rows={4}
        cols={28}
        autoFocus
        onKeyDown={saveInEnter}
        onChange={getDescriptionValue}
        variant="transparent"
        container="custom"
        placeholder="Введите заголовок карточки"
        value={description}
      />

      <div className={classes.edit_btn}>
        <div className={classes.save_btn}>
          <Button
            variant="contained"
            onClick={saveDescriptionValue}
            label="Сохранить"
          />

        </div>
        <div className={classes.cancel_btn}>
          <Button
            variant="just_icon"
            icon={<MdClear />}
            onClick={closeEditDescription}
          />
        </div>
      </div>
    </div>
  );
};

