import React,{ useRef } from "react";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import { GrClose } from "react-icons/gr";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./Editor.module.css";

export default function Editor({ getNewValue, addCard, closeCreator}){

  const ref = useRef();
  useOnClickOutside(ref, closeCreator);

  function saveChanged(e) {
    if (e.keyCode === 13){
      e.preventDefault()
      e.target.value = ''
      addCard();}
  }

  return (
    <div className={classes.control_creator} ref={ref}>
      <div className={classes.control_input}>
        <Input
          rows={3}
          cols={35}
          autoFocus
          onKeyDown={saveChanged}
          onChange={getNewValue}
          variant="transparent"
          container="custom"
          placeholder="Введите название карточки"
        />
      </div>
      <div className={classes.buttons}>
        <Button
          onClick={addCard}
          variant="contained"
          color="submit"
          label="Добавить карточку">
        </Button>
        <Button
          onClick={closeCreator}
          variant="just_icon"
          icon={<GrClose />}>
        </Button>
      </div>
    </div>
  );
};
