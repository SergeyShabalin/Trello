import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { dragDropCardToEmptyColumn } from "../../../../store/cards/asyncActions";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import ListCard from "../Cards";
import "./ColumnWrapper.css";
import "../Cards/ListCard.css";


export default function Column({ column, cardList, sortArr }) {

  const dispatch = useDispatch();
  const [shadow, setIsShadow] = useState(false);

  const handleDragStart = (e, currentColumnId, card) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
    e.dataTransfer.setData("currentColumnId", currentColumnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!column.cards[0]) {
      setIsShadow(true);
    }
  };

  function handleDropColumn(e) {
    e.preventDefault();
    setIsShadow(false);
    const card = JSON.parse(e.dataTransfer.getData("card"));
    const currentColumnId = e.dataTransfer.getData("currentColumnId");
    if (!cardList[0]) {
      console.log('перенес в пустую колонку на фронте');
      dispatch(dragDropCardToEmptyColumn(card, column._id, currentColumnId));
    }
  }

  function handleDragLeave(e) {
    setIsShadow(false);
  }

  const newCardList = sortArr.map(i => {
    return cardList.filter(item => item.order === i)[0];
  });

  return (
    <div className="wrapper"
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
        {shadow && <div className="cardShadow"></div>}
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
