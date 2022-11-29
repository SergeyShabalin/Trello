import React, { useState } from "react";
import { addNewBoard } from "../../../../../store/board/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import classes from "./BoardCreator.module.css";

export default function BoardCreator({ boardId, closeCreator, closeContextMenu }) {

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function addBoard() {
    closeCreator();
    closeContextMenu();
    dispatch(addNewBoard(title));
    //TODO достать id из экшена как-то
    console.log(boardId);
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

