import React, { useState } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import "./ListCard.css";


export default function ListCard({
                                   header, cardId, columnId,
                                   columnHeader, decisionDate,
                                   countTask, doneTask, order,

                                   ...props
                                 }) {
  const [shadow, setIsShadow] = useState(false);

  function handleDragOver(e) {
    if (e.target.className === "list_card") {
      setIsShadow(true);
    }
  }

  return (
    <>
      <div className="list_card" {...props}
           onDragOver={(e) => handleDragOver(e)}>
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
        <hr />
      </div>
      {shadow && <div style={{
        backgroundColor: "#a396a4",
        width: "200px",
        height: "30px",
        borderRadius: "5px"
      }}>Тень</div>}

    </>

  );
}
