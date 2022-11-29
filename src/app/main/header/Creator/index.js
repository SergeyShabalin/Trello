import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { BiCopyAlt } from "react-icons/bi";
import { RiTrelloFill } from "react-icons/ri";
import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import ContextMenu from "../ContextMenu";
import BoardCreator from "./BoardCreator";
import Button from "../../../../components/basic/Button";
import classes from "./Creator.module.css";
import useOpenCloseCreator from "./useOpenCloseCreator";
import NewBoard from "./BoardCreator/NewBoard";
import SampleBoard from "./BoardCreator/SampleBoard";
import useOpenCloseSampleCreator from "./useOpenCloseSampleCreator";
import BoardSampleCreator from "./BoardCreator/SampleBoard/BoardSampleCreator";
import { useSelector } from "react-redux";

export default function Creator() {

  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const { isCreator, openCreator, closeCreator } = useOpenCloseCreator();
  const { isSampleCreator, openSampleCreator, closeSampleCreator } = useOpenCloseSampleCreator();


  const content = (
    <>
      {/*TODO при добавлении доски нужно переходить сразу на ссылку доски*/}

      <NewBoard openCreator={openCreator} />
      <SampleBoard openSampleCreator={openSampleCreator} />
    </>
  );

  function closeCreators(){
    closeCreator()
    closeSampleCreator()
  }

  return (
    <div>
      <Button
        onClick={contextOpen}
        label="Создать" />

      {isContext && <ContextMenu
        closeContextMenu={contextClose}
        content={isCreator
          ? <BoardCreator
            closeContextMenu={contextClose}
            closeCreator={closeCreator} />
          : content
          &&
          isSampleCreator
            ? <BoardSampleCreator
              closeContextMenu={contextClose}
              closeSampleCreator={closeSampleCreator}/>
            : content}

        title="Создать">
        {(isCreator || isSampleCreator) ? <Button
          onClick={closeCreators}
          variant="just_icon"
          icon={<GrPrevious />} /> : null}
      </ContextMenu>}
    </div>
  );
};

