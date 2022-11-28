import React, { useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";
import "../Columns/ColumnWrapper.css";
import { dragDropCard, dragDropCardOneColumn } from "../../../../store/cards/asyncActions";
import { useDispatch } from "react-redux";


export default function ListCard({columnId,columnHeader, boardId,targetCard, ...props}) {

  const [shadowIn, setIsShadowIn] = useState(false);
  const dispatch = useDispatch();

  function handleDragOver() {
    setIsShadowIn(true);
  }

  function handleDragEnd() {
    setIsShadowIn(false);
  }

  function handleDragLeave(e) {
    if (e.target.className !== "cardShadow")
      setIsShadowIn(false);
  }

  function handleDrop(e) {
    setIsShadowIn(false);
    const card = JSON.parse(e.dataTransfer.getData("card"));
    const currentColumnId = e.dataTransfer.getData("currentColumnId");
    const data = {
      targetColumnId: columnId,
      currentCard: card,
      currentColumnId: currentColumnId,
      currentOrder: card.order,
      targetCardId: targetCard._id,
      targetOrder: targetCard.order
    };
    if (columnId === currentColumnId) {
      dispatch(dragDropCardOneColumn(data));
    } else
      dispatch(dragDropCard(data));
  }

  return (
    <>
      <div className="list_card" {...props}
           onDragLeave={handleDragLeave}
           onDragEnd={handleDragEnd}
           onDrop={handleDrop}
           onDragOver={handleDragOver}>
        <ContentEdit
          cardId={targetCard._id}
          header={targetCard.header}
          order={targetCard.order}
          columnId={columnId}
          boardId={boardId}
          columnHeader={columnHeader} />

        <div className="footer">
          {targetCard.decisionDate && <DecisionDate decisionDate={targetCard.decisionDate} />}
          {/*< BsTextIndentRight/>*/}
          <Checkout
            countTask={targetCard.countTask}
            doneTask={targetCard.doneTask} />
        </div>

      </div>
      {shadowIn && <div className="cardShadow"></div>}
    </>

  );
}
