import React, { useRef } from "react";
import { MdClear } from "react-icons/md";

import Input from "../../../../../../components/basic/Input";
import Button from "../../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../../hooks/UseOnClickOutside";
import classes from "./Editor.module.css";

export default function Editor({ addTaskKeyDown, getTaskValue, addNewTask, addMenuClose }) {

  const ref = useRef();
  useOnClickOutside(ref, addMenuClose);

  return (
    <div ref={ref}>
      <Input
        rows={3}
        cols={28}
        autoFocus
        onChange={getTaskValue}
        onKeyDown={addTaskKeyDown}
        variant="transparent"
        container="custom"
        placeholder="Добавить задачу"
      />
      <div className={classes.control_button}>
        <div className={classes.btn_add}>
          <Button
            onClick={addNewTask}
            variant="contained"
            label="Добавить" />
        </div>
        <Button
          variant="just_icon"
          icon={<MdClear />}
          onClick={addMenuClose} />
      </div>
    </div>
  );
};
