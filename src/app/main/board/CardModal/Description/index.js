import React, { useState, useRef } from "react";
import Input from "../../../../../components/basic/Input";
import classes from "./Description.module.css";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";

import Button from "../../../../../components/basic/Button";

export default function Description({ closeEditDescription, isEditDescription, description = "" }) {

  const [descriptionValue, setDescriptionValue] = useState("");
  const ref = useRef();
  useOnClickOutside(ref, closeEditDescription);

  function getDescriptionValue(e) {
    setDescriptionValue(e.target.value);
  }

  function saveDescriptionValue() {
    console.log(descriptionValue);
  }

  return (
    <>
      {isEditDescription
        ?
        <div className={classes.textarea} ref={ref}>
          <Input
            rows={4}
            cols={28}
            autoFocus
            onChange={getDescriptionValue}
            variant="transparent"
            container="custom"
            placeholder="Введите заголовок карточки"
            value={description}
          />

          <div className={classes.edit_btn}>
            <div className={classes.save_btn}>
              <Button
                variant="contained"
                onClick={saveDescriptionValue}
                label="Сохранить"
                color="blue">
              </Button>
            </div>
            <div className={classes.cancel_btn}>
              <Button
                variant="contained"
                onClick={closeEditDescription}
                label="Отмена"
                color="error">
              </Button>
            </div>
          </div>



        </div>
        : <div>
          {description !== "" ? <div className={classes.description_card}>{description}</div>
            : <div className={classes.description_card}>нет описания</div>
          }
        </div>
      }

    </>
  );
}

