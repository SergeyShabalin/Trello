import React, { useState } from "react";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import classes from "./BoardCreator.module.css";
import { GrPrevious } from "react-icons/gr";
import { addNewBoard } from "../../../../../store/board/asyncActions";
import { useDispatch } from "react-redux";

export default function BoardCreator({ closeCreator, closeContextMenu }) {

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function addBoard() {
    closeCreator();
    closeContextMenu();
    dispatch(addNewBoard(title));
  }

  function saveChanged(e) {
    if (e.keyCode === 13) addBoard();
  }

  function getNewValue({ target }) {
    setTitle(target.value)
  }

  return (
    <div>
      <span className={classes.header_creator}>Создание чистой доски</span>
      <div className={classes.controller}>
        <Input
          rows={1}
          cols={36}
          autoFocus
          onKeyDown={saveChanged}
          onChange={getNewValue}
          variant="transparent"
          container="custom"
          placeholder="Введите название доски" />
        <div className={classes.footer}>
          <div className={classes.creator}>
            <Button
              onClick={addBoard}
              variant="contained"
              color="submit"
              label="Добавить доску" />
          </div>
        </div>
      </div>

    </div>
  );
};

