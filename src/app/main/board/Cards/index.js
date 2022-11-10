import React, { createRef, useEffect, useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";
import "../Columns/ColumnWrapper.css";


export default function ListCard({
                                   header, cardId, columnId,
                                   columnHeader, decisionDate,
                                   countTask, doneTask, order,
                                   viewShadow, closeShadow,
                                   ...props
                                 }) {
  const [shadowIn, setIsShadowIn] = useState(false);

 if(shadowIn){
   closeShadow()
 };

  function viewShadowIn() {
    setIsShadowIn(true);
  }

  function closeShadowIn() {
    setIsShadowIn(false);
  }

  function handleDragOver(e) {
    viewShadowIn();
  }

  function handleDragOver2(e) {
    closeShadow();
  }


  function handleDragEnd(e) {
    e.preventDefault();
  }

  function handleDragLeave(e) {
    closeShadowIn()
  }

  function handleDrop() {
    closeShadowIn()
    // setIsShadow(false);
  }

  return (
    <> {shadowIn && <div onDragLeave={(e) => handleDragLeave(e)}
                         onDragEnd={(e) => handleDragEnd(e)}
                         onDrop={(e) => handleDrop(e)}
                         onDragOver={(e) => handleDragOver2(e)}
                         className="cardShadow"></div>}
      <div className="list_card" {...props}
           onDragOver={(e) => handleDragOver(e)}>
        {/*<div>{order}</div>*/}
        <ContentEdit
          cardId={cardId}
          header={header}
          columnId={columnId}
          columnHeader={columnHeader} />
        <div className="footer">
          {decisionDate && <DecisionDate decisionDate={decisionDate} />}
          <Checkout
            countTask={countTask}
            doneTask={doneTask} />
        </div>

      </div>

    </>

  );
}

// драглив привязан к врапперу, и он открывает тень. когда подходим к самой тени,
//мы выходим за пределы врапера, попадая в дочерний класс listwrapper и срабатывает
//обработчик драглив, закрывая тень. Как только тень закрывается - блок listwrapper
//становится меньше по размерам, и тем самым курсор попадает в поле действия wrapper