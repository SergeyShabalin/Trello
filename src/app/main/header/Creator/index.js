import React, { useEffect, useState,useRef } from "react";
import Button from "../../../../components/basic/Button";
import useOpenCloseContextMenu from "../useOpenCloseContextMenu";
import ContextMenu from "../ContextMenu";
import classes from "./Creator.module.css";
import { RiTrelloFill } from "react-icons/ri";
import BoardCreator from "./BoardCreator";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";

export default function Creator() {

  const { isContext, openContextMenu, closeContextMenu } = useOpenCloseContextMenu();
  const [isCreator, setIsCreator] = useState(false);


  function openCreator(){
    setIsCreator(true)
  }

  function closeCreator(){
    console.log('afsdf');
    setIsCreator(false)
  }

  const content = (
    <div className={classes.wrapper} onClick={openCreator}>
      <div className={classes.header}>
        <RiTrelloFill/>
        <span className={classes.title}>Cоздайте доску</span>
      </div>
      <p>Доска представляет собой совокупность карточек,
        упорядоченных в списках. Используйте её для управления проектом,
        отслеживания или организации чего угодно.</p>
    </div>
  );

  return (
    <div>
      <Button
        onClick={openContextMenu}
        label="Создать" />

      {isContext && <ContextMenu
        closeContextMenu={closeContextMenu}
        content={isCreator ? <BoardCreator
          closeContextMenu={closeContextMenu}
          closeCreator={closeCreator}/> : content}
        title="Создать"/>}
    </div>
  );
};

