import React, { useRef } from "react";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./Editor.module.css";

export default function Editor({ addColumn, getColumnHeader, addListColumn, closeEditor }) {

  const ref = useRef();
  useOnClickOutside(ref, closeEditor);

  return (
    <div onKeyDown={addColumn} ref={ref}>
      <div className={classes.add_list_wrapper}>
        <Input
          autoFocus
          rows={3}
          cols={35}
          variant="transparent"
          placeholder="Ввести заголовок списка"
          onChange={getColumnHeader}
        >
        </Input>
        <div className={classes.list_add_controls}>
          <Button
            onClick={addListColumn}
            label="Добавить список"
          />
        </div>
      </div>
    </div>
  );
};
