import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { updateColumn } from "../../../../../../store/columns/asyncActions";
import Input from "../../../../../../components/basic/Input";
import useOnClickOutside from "../../../../../../hooks/UseOnClickOutside";
import classes from "./ListHeaderEdit.module.css";


function ListHeaderEdit({ header, columnId, closeEditHeader, isEditHeader }) {

  const ref = useRef();
  const dispatch = useDispatch();
  const [newHeader, setNewHeader] = useState(header);
  const rowsInput = Math.ceil( header.length / 30);

  useOnClickOutside(ref, closeEditHeader);

  function saveChanged(e) {
    if (e.keyCode === 13) {
      dispatch(updateColumn(columnId, newHeader));
      closeEditHeader();
    }
  }

  function getNewValue({ target }) {
    setNewHeader(target.value);
  }

  return (
    <div>
      {isEditHeader
        ? <div ref={ref} className={classes.edit_wrapper}>
          <Input
            rows={rowsInput}
            cols={35}
            autoFocus
            onKeyDown={saveChanged}
            onChange={getNewValue}
            variant="transparent_column_header"
             container="custom"
            placeholder="Введите заголовок колонки"
            value={header}
          />
        </div>
        : <span className={classes.title}>{header}</span>
      }
    </div>
  );
};

export default ListHeaderEdit;