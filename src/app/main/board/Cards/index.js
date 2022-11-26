import React, { createRef, useEffect, useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";
import "../Columns/ColumnWrapper.css";
import { dragDropCard, dragDropCardOneColumn } from "../../../../store/cards/asyncActions";
import { useDispatch } from "react-redux";
import { BsTextIndentRight } from "react-icons/bs";


export default function ListCard({
                                   header, cardId, columnId,
                                   columnHeader, decisionDate,
                                   countTask, doneTask, order,
                                   boardId,
                                   ...props
                                 }) {
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

//TODO сделать объект, в него пихнуть все что в диспатче
  function handleDrop(e) {
    setIsShadowIn(false);
    const card = JSON.parse(e.dataTransfer.getData("card"));
    const currentColumnId = e.dataTransfer.getData("currentColumnId");

    const data = {
      id: columnId,
      currentCard: card,
      currentColumnId:currentColumnId,
      currentOrder: card.order,
      targetCardId:  cardId,
      targetOrder: order
    }

    if (columnId === currentColumnId) {
      dispatch(dragDropCardOneColumn(data))
    } else
      dispatch(dragDropCard(columnId, card, currentColumnId, card.order, cardId, order));
  }

  return (
    <>
      <div className="list_card" {...props}
           onDragLeave={handleDragLeave}
           onDragEnd={handleDragEnd}
           onDrop={handleDrop}
           onDragOver={handleDragOver}>
        <ContentEdit
          cardId={cardId}
          header={header}
          order={order}
          columnId={columnId}
          boardId={boardId}
          columnHeader={columnHeader} />

        <div className="footer">
          {decisionDate && <DecisionDate decisionDate={decisionDate} />}
          {/*< BsTextIndentRight/>*/}
          <Checkout
            countTask={countTask}
            doneTask={doneTask} />
        </div>

      </div>
      {shadowIn && <div className="cardShadow"></div>}
    </>

  );
}
