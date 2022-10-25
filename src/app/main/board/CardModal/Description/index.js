import React, { useState, useRef } from "react";
import Input from "../../../../../components/basic/Input";
import classes from "./Description.module.css";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Button from "../../../../../components/basic/Button";

export default function Description({closeEditDescription, isEditDescription}) {

  const ref = useRef();
  useOnClickOutside(ref, closeEditDescription);

  return (
    <>
      {isEditDescription
        ?
        <div className={classes.textarea} ref={ref}>
          <Input
            rows={4}
            cols={28}
            autoFocus
            variant="transparent"
            container="custom"
            placeholder="Введите заголовок карточки"
            value="Описание"
          />
        </div>
        : <span className={classes.description_card}>Здесь будет описание  карточки</span>
      }

    </>
  );
}

