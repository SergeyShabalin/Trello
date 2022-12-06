import React from "react";
import { GrPrevious } from "react-icons/gr";

import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import useOpenCloseSampleCreator from "./useOpenCloseSampleCreator";
import useOpenCloseCreator from "./useOpenCloseCreator";
import ContextMenu from "../ContextMenu";
import BoardCreator from "./BoardCreator";
import Button from "../../../../components/basic/Button";
import NewBoard from "./BoardCreator/NewBoard";
import SampleBoard from "./BoardCreator/SampleBoard";
import BoardSampleCreator from "./BoardCreator/SampleBoard/BoardSampleCreator";


export default function Creator({ currentBoard }) {

  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  const { isCreator, openCreator, closeCreator } = useOpenCloseCreator();
  const { isSampleCreator, openSampleCreator, closeSampleCreator } = useOpenCloseSampleCreator();

  const content = (
    <>
      <NewBoard openCreator={openCreator} />
      <SampleBoard openSampleCreator={openSampleCreator} />
    </>
  );

  function closeCreators() {
    closeCreator();
    closeSampleCreator();
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
            currentBoard={currentBoard}
            closeContextMenu={contextClose}
            closeCreator={closeCreator} />
          : content
          &&
          isSampleCreator
            ? <BoardSampleCreator
              closeContextMenu={contextClose}
              closeSampleCreator={closeSampleCreator} />
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

