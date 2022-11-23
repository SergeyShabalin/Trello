import React,{ useState } from "react";
import Input from "../../../../../components/basic/Input";
import Button from "../../../../../components/basic/Button";
import classes from './BoardCreator.module.css'

export default function BoardCreator({closeCreator, closeContextMenu}){

  const [isEmpty, setIsEmpty] = useState(true);

  function addBoard(){
    closeCreator()
    closeContextMenu()
  }

  function saveChanged(){

  }
  function getNewValue({target}){
    if (target.value === '') setIsEmpty(true)
    else setIsEmpty(false)
  }

  return (
    <div>
      <Input
        rows={3}
        cols={35}
        autoFocus
        onKeyDown={saveChanged}
        onChange={getNewValue}
        variant="transparent"
        container="custom"
        placeholder="Введите название доски"/>
      <div className={classes.footer}>
        {isEmpty && <span className={classes.hint}>👋 Укажите название доски</span>}
        {!isEmpty && <Button
          onClick={addBoard}
          variant="contained"
          color="submit"
          label="Добавить доску"/>}
      </div>
    </div>
  );
};

