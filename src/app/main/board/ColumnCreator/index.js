import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import Button from "../../../../components/basic/Button";
import Editor from "./Editor";

function ListCreator({ addList, boardId }) {

  const [header, setHeader] = useState("");
  const {contextOpen, contextClose, isContext} = useOpenCloseContext()

  function getColumnHeader(e) {
    setHeader(e.target.value);
  }

  function addColumn(e) {
    if (e.keyCode === 13) {
      addList(header, boardId);
      contextClose();
    }
  }

  function addListColumn() {
    addList(header, boardId)
    contextClose();
  }

  if (!isContext) return (
    <Button
      onClick={contextOpen}
      variant="contained"
      label="Добавить колонку"
      startIcon={<AiOutlinePlus />}
    />
  );

  return (
      <Editor
        getColumnHeader={getColumnHeader}
        addListColumn={addListColumn}
        addColumn={addColumn}
        closeEditor={contextClose}
      />
  );
};

export default ListCreator;
