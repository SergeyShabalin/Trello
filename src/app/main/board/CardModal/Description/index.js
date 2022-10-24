import React, { useState, useRef } from "react";
import Input from "../../../../../components/basic/Input";
import classes from "./Description.module.css";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Button from "../../../../../components/basic/Button";

export default function Description() {

  const [isEditDescription, setIsEditDescription] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, closeEditDescription);

  function openEditDescription() {
    setIsEditDescription(true);
  }

  function closeEditDescription() {
    setIsEditDescription(false);
  }


  return (
    <>
      <div className={classes.description_wrapper}><AiOutlineMenuUnfold />
      <h4 className={classes.description_title}>Описание</h4>
      <Button
        onClick={openEditDescription}
        variant="contained"
        label="Изменить">
      </Button>
    </div>


      <div  className={classes.textarea} ref={ref}>
        <Input
          rows={4}
          cols={28}
          autoFocus
          variant="transparent"
          container="custom"
          placeholder="Введите заголовок карточки"
          value="Описание"
        /></div>

        <span className={`${isEditDescription &&  classes.description_hidden}`}>Описание карточки</span>


    </>
  );
}

