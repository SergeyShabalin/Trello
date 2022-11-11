import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dragDropCard } from "../../../../store/cards/asyncActions";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import ListCard from "../Cards";
import "./ColumnWrapper.css";
import "../Cards/ListCard.css";


export default function Column({ column, cardList }) {

  const dispatch = useDispatch();
  // const [shadow, setIsShadow] = useState(false);


  const handleDragStart = (e, currentColumnId, card) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
    e.dataTransfer.setData("currentColumnId", currentColumnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();

  };

  function handleDropColumn(e) {
    e.preventDefault();
    console.log('column');
  }

  cardList.sort((a, b) => a.order > b.order ? 1 : -1);

  return (
    <div className="wrapper"
         onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDropColumn(e)}
      >
      <div className="list_wrapper">
        <ListHeader column={column}/>
        <div className="cards_wrapper">
          {cardList.map((card) => (
            <ListCard
              key={card._id}
              draggable
              onDragStart={(e) => handleDragStart(e, column._id, card)}
              columnHeader={column.header}
              columnId={column._id}
              order={card.order}
              cardId={card._id}
              header={card.header}
              decisionDate={card.decisionDate}
              countTask={card.countTask}
              doneTask={card.doneTask}
            />))
          }
        </div>
        {/*{shadow && <div className="cardShadow" ></div>}*/}
        <div className="card_creator">
          <CardCreator columnId={column._id} />
        </div>
      </div>
    </div>
  );
}

Column.propTypes = {
  header: PropTypes.string
};
