import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { updateBoard } from "../../../../store/board/asyncActions";
import Input from "../../../../components/basic/Input";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import classes from "./BoardEditor.module.css";

export default function BoardEditor({ boardId, closeEditor, title }) {

  const ref = useRef();
  const dispatch = useDispatch();
  const [titleBoard, setTitleBoard] = useState();
  useOnClickOutside(ref, closeEditor);

  function getBoardHeader({ target }) {
    setTitleBoard(target.value);
  }

  function saveChanged(e) {
    if (e.keyCode === 13) {
      dispatch(updateBoard(boardId, titleBoard));
      closeEditor();
    }
  }

  return (
    <div ref={ref} className={classes.editor}>
      <Input
        rows={1}
        cols={35}
        autoFocus
        onKeyDown={saveChanged}
        onChange={getBoardHeader}
        variant="large"
        container="custom"
        placeholder="Введите заголовок доски"
        value={title} />
    </div>
  );
};
