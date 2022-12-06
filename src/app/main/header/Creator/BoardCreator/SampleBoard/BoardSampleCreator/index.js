import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewBoardSample } from "../../../../../../../store/board/asyncActions";
import Input from "../../../../../../../components/basic/Input";
import Button from "../../../../../../../components/basic/Button";
import useOpenCloseContext from "../../../../../../../hooks/UseOpenCloseContext";
import classes from "../../BoardCreator.module.css";

export default function BoardSampleCreator({ closeSampleCreator, closeContextMenu }) {

  const [title, setTitle] = useState("");
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const dispatch = useDispatch();


  function saveChanged(e) {
    if (e.keyCode === 13) addBoard();
  }

  function getNewValue({ target }) {
    setTitle(target.value);
  }

  function addBoard() {
    closeSampleCreator();
    closeContextMenu();
    contextClose();
    dispatch(addNewBoardSample(title));

  }

  return (
    <div>
      <div className={classes.header_sample_creator} onClick={contextOpen}>
        <span className={classes.title_creator}>Стандартный шаблон</span>
        <span className={classes.description}> Данный шаблон содержит в себе 3 колонки.
          Создайте этот шаблон, чтобы начать работу прямо сейчас.
        </span>
      </div>

      {isContext &&
        <div className={classes.control}>
          <Input
            rows={1}
            cols={36}
            autoFocus
            onKeyDown={saveChanged}
            onChange={getNewValue}
            variant="transparent"
            container="custom"
            placeholder="Введите название доски"
          />

          <div className={classes.footer}>
            <div className={classes.creator}>
              <Button
                onClick={addBoard}
                variant="contained"
                color="submit"
                label="Добавить доску"
              />
            </div>
          </div>
        </div>}
    </div>
  );
};

