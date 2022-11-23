import React, { useRef } from "react";
import Input from "../../../../components/basic/Input";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import classes from './BoardEditor.module.css'

export default function BoardEditor({closeEditor, title}){
  const ref = useRef();
  useOnClickOutside(ref, closeEditor);

  function getBoardHeader({target}){

  }

  function saveChanged(){

  }

  return (
    <div ref={ref} className={classes.editor}>

      <Input
        rows={1}
        cols={35}
        autoFocus
        onKeyDown={saveChanged}
        onChange={getBoardHeader}
        variant="transparent"
         container="custom"
        placeholder="Введите заголовок доски"
        value={title}
      />

    </div>
  );
};

;