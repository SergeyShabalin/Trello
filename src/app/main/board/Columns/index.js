import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from "./ColumnWrapper.module.css";
import ListCard from "../Cards";
import { useDispatch } from "react-redux";
import { dragDropCard } from "../../../../store/cards/asyncActions";


export default function Column({ column, cardList, ...props }) {

  const dispatch = useDispatch();

  const handleDragStart = (e, currentColumnId, card) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
  };

  const handleDragOver = (e) => {
    e.preventDefault();

  };
  const handleDragEnd = (e) => {
    console.log("end");
  };

  function handleDrop(e) {
    e.preventDefault();
    const card = JSON.parse(e.dataTransfer.getData("card"));

     dispatch(dragDropCard(column._id, card));
  }

  function handleDropColumn(e) {
    e.preventDefault();
    const card = JSON.parse(e.dataTransfer.getData("card"));
    console.log(column._id);
    dispatch(dragDropCard(column._id, card));
  }

  return (
    <div className={classes.list_wrapper}
         onDrop={(e) => handleDropColumn(e)}
         onDragOver={(e) => handleDragOver(e)}
         onDragEnd={(e) => handleDragEnd(e)}>
      <ListHeader column={column} />
      <div className={classes.cards_wrapper}>
        {cardList.map((card) => (
          <ListCard
            key={card._id}
            draggable
            onDragStart={(e) => handleDragStart(e, column._id, card)}
            // onDragOver={(e) => handleDragOver(e)}
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
