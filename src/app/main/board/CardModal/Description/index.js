import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { updateCardDescription } from "../../../../../store/cards/asyncActions";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";
import Editor from "./Editor";
import Button from "../../../../../components/basic/Button";
import classes from "./Description.module.css";

export default function Description({ cardId, columnId, description = "" }) {

  const [descriptionValue, setDescriptionValue] = useState("");
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();

  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, contextClose);

  function getDescriptionValue(e) {
    setDescriptionValue(e.target.value);
  }

  function saveDescriptionValue() {
    dispatch(updateCardDescription(cardId, columnId, descriptionValue));
    contextClose();
  }

  function saveInEnter(e) {
    if (e.keyCode === 13) saveDescriptionValue();
  }

  const titleDescription = (
    <div className={classes.description_wrapper}>
      <AiOutlineMenuUnfold className={classes.icons} />
      <h4 className={classes.description_title}>Описание</h4>
      <Button label="Изменить" onClick={contextOpen} />
    </div>
  );

  if (!isContext) return (
    <> {titleDescription}
      <div onClick={contextOpen}>
        {
          description !== ""
            ? <div className={classes.description_card}>{description}</div>
            : <div className={classes.description_card}>нет описания</div>
        }
      </div>
    </>
  );

  return (
    <> {titleDescription}
      <Editor
        saveInEnter={saveInEnter}
        getDescriptionValue={getDescriptionValue}
        description={description}
        saveDescriptionValue={saveDescriptionValue}
        closeEditDescription={contextClose}
      />
    </>
  );
}
