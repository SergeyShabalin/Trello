import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../../../components/basic/Button";
import Editor from "./Editor";
import useOpenEditor from "./useOpenEditor";

function ListCreator({ addList }) {

  const [header, setHeader] = useState("");
  const { isEditor, openEditor, closeEditor } = useOpenEditor();

  function getColumnHeader(e) {
    setHeader(e.target.value);
  }

  function addColumn(e) {
    if (e.keyCode === 13) {
      addList(header);
      closeEditor();
    }
  }

  function addListColumn() {
    addList(header);
    closeEditor();
  }

  if (!isEditor) return (
    <Button
      onClick={openEditor}
      variant="contained"
      label="Добавить колонку"
      startIcon={<AiOutlinePlus />}/>
  );

  return (
      <Editor
        getColumnHeader={getColumnHeader}
        addListColumn={addListColumn}
        addColumn={addColumn}
        closeEditor={closeEditor} />
  );
};

export default ListCreator;