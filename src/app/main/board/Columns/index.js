import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragDropCard, dragDropCardToEmptyColumn } from "../../../../store/cards/asyncActions";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import ListCard from "../Cards";
import "./ColumnWrapper.css";
import "../Cards/ListCard.css";


export default function Column({ column, cardList, sortArr }) {

  const dispatch = useDispatch();
  const [shadow, setIsShadow] = useState(false);

  const handleDragStart = (e, currentColumnId, card) => {
    console.log(currentColumnId);
    e.dataTransfer.setData("card", JSON.stringify(card));
    e.dataTransfer.setData("currentColumnId", currentColumnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if(!column.cards[0]){
      setIsShadow(true)
    }
  };

  function cl(){

  }

  function handleDropColumn(e, order, cardId) {
    e.preventDefault();
    setIsShadow(false)
    // console.log(column._id);
     const card = JSON.parse(e.dataTransfer.getData("card"));
     const currentColumnId = e.dataTransfer.getData("currentColumnId");
    // // console.log('columns',columnId, card, currentColumnId, card.order, cardId, order);
    // console.log('columnId',columnId);
    //  console.log('card',card);
    //   console.log('currentColumnId',currentColumnId);
    //   console.log('card.order',card.order);
    // console.log('cardId',cardId);
    // console.log('order',order);
    dispatch(dragDropCardToEmptyColumn(card, column._id, currentColumnId))
    // dispatch(dragDropCard(columnId, card, currentColumnId, card.order, cardId, order));
  }

  function handleDragLeave(e) {
      setIsShadow(false);
  }

  const newCardList = sortArr.map(i => {
    return cardList.filter(item => item.order === i)[0];
  });

  return (
    <div className="wrapper"
         onClick={cl}
         onDragOver={(e) => handleDragOver(e)}
         onDragLeave={(e) => handleDragLeave(e)}
         onDrop={(e) => handleDropColumn(e)}>
      <div className="list_wrapper">

        <ListHeader column={column} />
        <div className="cards_wrapper">
          {newCardList.map((card) => (
            <ListCard
              key={card._id}
              draggable
              onDragStart={(e) => handleDragStart(e, column._id, card)}
               onDrop={(e) => handleDropColumn(e, column._id)}
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
        {shadow && <div className="cardShadow" ></div>}
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
