import React, {  useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { BiCopyAlt } from "react-icons/bi";
import { RiTrelloFill } from "react-icons/ri";
import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import ContextMenu from "../ContextMenu";
import BoardCreator from "./BoardCreator";
import Button from "../../../../components/basic/Button";
import classes from "./Creator.module.css";

export default function Creator() {

  const {contextOpen, contextClose, isContext} = useOpenCloseContext()
  const [isCreator, setIsCreator] = useState(false);
//TODO сделатьлокальный хук
  function openCreator() {
    setIsCreator(true);
  }

  function closeCreator() {
    setIsCreator(false);
  }

  const content = (
    <>
      <div className={classes.wrapper} onClick={openCreator}>
      <div className={classes.header}>
        <RiTrelloFill />
        <span className={classes.title}>Cоздайте доску</span>
      </div>
      <p>Доска представляет собой совокупность карточек,
        упорядоченных в списках. Используйте её для управления проектом,
        отслеживания или организации чего угодно.</p>

    </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <BiCopyAlt/>
          <span className={classes.title}>Начните с шаблона</span>
        </div>
        <p>Начните работу быстрее, используя шаблон доски</p>
      </div>
    </>
  );


  return (
    <div>
      <Button
        onClick={contextOpen}
        label="Создать" />
      {isContext && <ContextMenu
        closeContextMenu={contextClose}
        content={isCreator ? <BoardCreator
          closeContextMenu={contextClose}
          closeCreator={closeCreator} /> : content}
        title="Создать">
        {isCreator && <Button
          onClick={closeCreator}
          variant="just_icon"
          icon={<GrPrevious />}
        />}
      </ContextMenu>}
    </div>
  );
};

