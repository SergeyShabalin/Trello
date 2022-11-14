import React, { createRef, useEffect, useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";
import "../Columns/ColumnWrapper.css";
import { dragDropCard } from "../../../../store/cards/asyncActions";
import { useDispatch } from "react-redux";
import { BsTextIndentRight } from "react-icons/bs";


export default function ListCard({
                                   header, cardId, columnId,
                                   columnHeader, decisionDate,
                                   countTask, doneTask, order,
                                   ...props
                                 }) {
  const [shadowIn, setIsShadowIn] = useState(false);
  const dispatch = useDispatch();

  function handleDragOver(e) {
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
    dispatch(dragDropCard(columnId, card, currentColumnId, card.order, cardId, order));
  }

  return (
    <>
      <div className="list_card" {...props}
           onDragLeave={(e) => handleDragLeave(e)}
           onDragEnd={(e) => handleDragEnd()}
           onDrop={(e) => handleDrop(e, order)}
           onDragOver={(e) => handleDragOver(e)}>
        <ContentEdit
          cardId={cardId}
          header={header}
          order={order}
          columnId={columnId}
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
// драглив привязан к врапперу, и он открывает тень. когда подходим к самой тени,
//мы выходим за пределы врапера, попадая в дочерний класс listwrapper и срабатывает
//обработчик драглив, закрывая тень. Как только тень закрывается - блок listwrapper
//становится меньше по размерам, и тем самым курсор попадает в поле действия wrapper