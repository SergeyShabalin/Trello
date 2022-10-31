import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import { updateCardDescription } from "../../../../../store/cards/asyncActions";
import Editor from "./Editor";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Button from "../../../../../components/basic/Button";
import useOpenEditDescription from "./useOpenEditDescription";
import classes from "./Description.module.css";

export default function Description({ cardId, columnId, description = "" }) {

  const [descriptionValue, setDescriptionValue] = useState("");
  const { isEditDescription, openEditDescription, closeEditDescription } = useOpenEditDescription();

  const ref = useRef();
  const dispatch = useDispatch();
  useOnClickOutside(ref, closeEditDescription);

  function getDescriptionValue(e) {
    setDescriptionValue(e.target.value);
  }

  function saveDescriptionValue() {
    dispatch(updateCardDescription(cardId, columnId, descriptionValue));
    closeEditDescription();
  }

  function saveInEnter(e) {
    if (e.keyCode === 13) saveDescriptionValue();
  }

  const titleDescription = (
    <div className={classes.description_wrapper}>
      <AiOutlineMenuUnfold className={classes.icons} />
      <h4 className={classes.description_title}>Описание</h4>
      <Button label="Изменить" onClick={openEditDescription} />
    </div>
  );

  if (!isEditDescription) return (
    <> {titleDescription}
      <div onClick={openEditDescription}>
        {
          description !== "" ? <div className={classes.description_card}>{description}</div>
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
        closeEditDescription={closeEditDescription} />
    </>
  );
}

