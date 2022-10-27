import React, { useState } from "react";
import Input from "../../../../../../components/basic/Input";
import Button from "../../../../../../components/basic/Button";
import classes from "../Editor/Editor.module.css";
import DecisionDate from "../../DecisionDate";
import Checkout from "../../Checkout";
import { useDispatch } from "react-redux";
import { updateCard } from "../../../../../../store/cards/asyncActions";

export default function Editor({ header, closeModalContextMenu, cardId, columnId, cardIndex, columnIndex }) {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");

  function getNewValue({ target }) {
    setNewTitle(target.value);
  }
function saveChanged(){
  dispatch(updateCard(newTitle, cardIndex, columnIndex, cardId, columnId));
  closeModalContextMenu();
}

  function saveChangedKeyDown(e) {
    if (e.keyCode === 13) {
      saveChanged()
    }
  }

  return (
    <div className={classes.editor}>
      <div className={classes.textarea}>
        <Input
          rows={4}
          cols={28}
          autoFocus
          onKeyDown={saveChangedKeyDown}
          onChange={getNewValue}
          variant="transparent"
          container="custom"
          placeholder="Введите заголовок карточки"
          value={header}
        />
        <div className={classes.footer}>
          <DecisionDate />
          <Checkout />
        </div>
      </div>

      <div className={classes.button}>
        <Button variant="contained" label="Сохранить" color="blue" onClick={saveChanged}/>
      </div>
    </div>
  );
}
