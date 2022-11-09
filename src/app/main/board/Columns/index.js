import React, { useState } from "react";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import  "./ColumnWrapper.css";
import "../Cards/ListCard.css"
import ListCard from "../Cards";
import { useDispatch } from "react-redux";
import { dragDropCard } from "../../../../store/cards/asyncActions";


export default function Column({ column, cardList, ...props }) {

  const dispatch = useDispatch();


  const handleDragStart = (e, currentColumnId, card) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
    e.dataTransfer.setData("currentColumnId", currentColumnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();

  };


  const handleDragEnd = (e) => {
    console.log("end");
  };

  // function handleDrop(e) {
  //   e.preventDefault();
  //   const card = JSON.parse(e.dataTransfer.getData("card"));
  //   dispatch(dragDropCard(column._id, card));
  // }

  function handleDropColumn(e) {
    e.preventDefault();
    const card = JSON.parse(e.dataTransfer.getData("card"));
    const currentColumnId = e.dataTransfer.getData("currentColumnId");
    dispatch(dragDropCard(column._id, card,currentColumnId));
  }

  return (
    <div className='list_wrapper'
         onDrop={(e) => handleDropColumn(e)}
         onDragOver={(e) => handleDragOver(e)}
         onDragEnd={(e) => handleDragEnd(e)}>
      <ListHeader column={column} />
       <div className='cards_wrapper'>
        {cardList.map((card) => (
          <ListCard
            key={card._id}
            draggable
            onDragStart={(e) => handleDragStart(e, column._id, card)}
            // onDragEnd={(e) => handleDragEnd(e)}
            // onDrop={(e) => handleDrop(e)}
            columnHeader={column.header}
            columnId={column._id}
            order={card.order}
            cardId={card._id}
            header={card.header}
            decisionDate={card.decisionDate}
            countTask={card.countTask}
            doneTask={card.doneTask}
          /> ))
        }
      </div>

      <div className='card_creator'>
        <CardCreator columnId={column._id} />
      </div>
    </div>
  );
}

Column.propTypes = {
  header: PropTypes.string
};
