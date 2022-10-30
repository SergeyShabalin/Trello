import React, { useState, useRef } from "react";
import Input from "../../../../../components/basic/Input";
import classes from "./Description.module.css";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";

import Button from "../../../../../components/basic/Button";
import { updateCardDescription } from "../../../../../store/cards/asyncActions";
import { useDispatch } from "react-redux";

export default function Description({
                                      closeEditDescription,
                                      openEditDescription,
                                      isEditDescription,
                                      cardId,
                                      columnId,
                                      description = ""
                                    }) {

  const [descriptionValue, setDescriptionValue] = useState("");
  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, closeEditDescription);

  function getDescriptionValue(e) {
    setDescriptionValue(e.target.value);
  }

  function saveDescriptionValue() {
    dispatch(updateCardDescription(cardId, columnId, descriptionValue));
    closeEditDescription();
  }

  function saveInEnter(e) {
    if (e.keyCode === 13) saveDescriptionValue();
  }

//TODO вынести в отдельный окмпонент
  if (!isEditDescription) return (
    <div onClick={openEditDescription}>
      {
        description !== "" ? <div className={classes.description_card}>{description}</div>
          : <div className={classes.description_card}>нет описания</div>
      }
    </div>
  );
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
            label="Сохранить">
          </Button>
        </div>
        <div className={classes.cancel_btn}>
          <Button
            variant="contained"
            onClick={closeEditDescription}
            label="Отмена">
          </Button>
        </div>
      </div>
    </div>
  );
}

