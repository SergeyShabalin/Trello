import React, { useState } from "react";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from "./ColumnWrapper.module.css";
import ListCard from "../Cards";
import { useDispatch } from "react-redux";
import { dragDropCard } from "../../../../store/cards/asyncActions";


export default function Column({ column, cardList }) {

  const [currentCard, setCurrentCard] = useState();
  const [currentColumnId, setCurrentColumnId] = useState();


  const dispatch = useDispatch()

  function dragStartHandler(e, card, columnId) {
    setCurrentCard(card);
    setCurrentColumnId(columnId);
  }

  function dragLeaveHandler() {

  }

  function dragEndHandler(e) {
    // e.target.style.background = '#ffffff';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    // e.target.style.background = '#E5D8D8FF';
  }

  function dropHandler(e, card, columnId) {
    e.preventDefault();
    dispatch(dragDropCard(currentCard, currentColumnId, columnId))
  }


  return (
    <div className={classes.list_wrapper}>
      <ListHeader column={column}
        // addCardMenuCreate={addCardMenuCreate}
      />

      <div className={classes.cards_wrapper}>
        {cardList.map((card) => (
          <ListCard
            columnHeader={column.header}
            columnId={column._id}
            key={card._id}
            order={card.order}
            cardId={card._id}
            header={card.header}
            decisionDate={card.decisionDate}
            countTask={card.countTask}
            doneTask={card.doneTask}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, card, column._id)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card, column._id)}
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
