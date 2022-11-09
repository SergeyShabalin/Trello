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
  // const [shadows, setIsShadow] = useState(false);
//TODO не использовать dragleave, на старом диве оставять тень, пока не перескочит на новый
 // элемент
  function handleDragOver(e) {

    // e.target.classList.add('new')
    // e.previous.classList.remove('new')
    //   setIsShadow(true);
    // e.target.classList.add('new')
  }


  function handleDragEnd(e){
    e.preventDefault()
    // if (e.currentTarget.className ===   "cardShadow" ) console.log('shadow');
      // setIsShadow(false);

  }

  function handleDragLeave(e){
    // if (e.target.className !==   "cardShadowHidden")
    //   setIsShadow(false);
    // e.target.classList.remove('new')
  }

  function handleDrop(){
    // setIsShadow(false);
  }


  return (
    <>
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
            doneTask={doneTask}/>
        </div>

      </div>
      {/*<div  onDragLeave={(e)=>handleDragLeave(e)}*/}
      {/*      onDragEnd={(e)=>handleDragEnd(e)}*/}
      {/*      onDrop={(e)=>handleDrop(e)}*/}
      {/*      className=  'cardShadow' ></div>*/}
    </>

  );
}
