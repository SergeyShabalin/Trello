import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from "./ColumnWrapper.module.css";
import ListCard from "../Cards";
import { useDispatch } from "react-redux";
import { dragDropCard } from "../../../../store/cards/asyncActions";


export default function Column({ column, cardList }) {

  const dispatch = useDispatch();

  const handleDragStart = (e, currentCardId, currentColumnId) => {
    e.dataTransfer.setData("currentCardId", currentCardId);
    e.dataTransfer.setData("currentColumnId", currentColumnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
  };

  function handleDrop(e) {
    e.preventDefault();
    const currentCardId = e.dataTransfer.getData("currentCardId");
    const currentColumnId = e.dataTransfer.getData("currentColumnId");
    dispatch(dragDropCard(column._id, currentCardId, currentColumnId));
  }


  return (
    <div className={classes.list_wrapper}>
      <ListHeader column={column} />
      <div className={classes.cards_wrapper}>
        {cardList.map((card) => (
          <ListCard
            key={card._id}
            draggable
            onDragStart={(e) => handleDragStart(e, card._id, column._id)}
            onDragOver={(e) => handleDragOver(e)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDrop={(e) => handleDrop(e)}
            columnHeader={column.header}
            columnId={column._id}
            order={card.order}
            cardId={card._id}
            header={card.header}
            decisionDate={card.decisionDate}
            countTask={card.countTask}
            doneTask={card.doneTask}
          />
        ))
        }
      </div>
      <div className={classes.card_creator}>
        <CardCreator columnId={column._id} />
      </div>
    </div>
  );
}

Column.propTypes = {
  header: PropTypes.string
};
