import React, { createRef, useEffect, useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";
import "../Columns/ColumnWrapper.css"


export default function ListCard({
                                   header, cardId, columnId,
                                   columnHeader, decisionDate,
                                   countTask, doneTask, order,

                                   ...props
                                 }) {
  const [shadow, setIsShadow] = useState(false);

  const ref = createRef();

  function handleDragOver(e) {
     // if (e.target.className === "list_wrapper")
        setIsShadow(true);
  }

  function handleDragEnd(e){
    e.preventDefault()

    setIsShadow(false);
  }

  function handleDragLeave(e){
     if (e.target.className === "cardShadow"){
    setIsShadow(true);} else
    setIsShadow(false);
  }

  function handleDrop(){
    setIsShadow(false);
  }

  return (
    <>
      <div className="list_card" {...props} ref={ref}
           onDragOver={(e) => handleDragOver(e)}
           onDragEnd={(e)=>handleDragEnd(e)}
           onDragLeave={(e)=>handleDragLeave(e)}
           onDrop={(e)=>handleDrop(e)}
      >
        <div>{order}</div>
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
        <hr className='hr'/>
      </div>
       <div className={shadow ? 'cardShadow' :'cardShadowHidden' }></div>
    </>

  );
}
