import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dragDropCardToEmptyColumn } from "../../../../store/cards/asyncActions";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import ListCard from "../Cards";
import Loader from "../../../../components/basic/Loader";
import "./ColumnWrapper.css";
import "../Cards/ListCard.css";

export default function Column({ column, cardList, sortArr, boardId }) {

  const dispatch = useDispatch();
  const [shadow, setIsShadow] = useState(false);
  const isCardLoader = useSelector(state => state.cards.isLoading);

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
      dispatch(dragDropCardToEmptyColumn(card, column._id, currentColumnId));
    }
  }

  function handleDragLeave() {
    setIsShadow(false);
  }

  const newCardList = sortArr.map(i => cardList.find(item => item.order === i))

  return (
    <div className="wrapper"
         onDragOver={handleDragOver}
         onDragLeave={handleDragLeave}
         onDrop={handleDropColumn}>
      <div className="list_wrapper">

        <ListHeader column={column} />
        {isCardLoader && <Loader/>}
        <div className="cards_wrapper">
          {newCardList.map((card) => (
            <ListCard
              key={card._id}
              draggable
              onDragStart={(e) => handleDragStart(e, column._id, card)}
              onDrop={(e) => handleDropColumn(e, column._id)}
              columnHeader={column.header}
              columnId={column._id}
              boardId={boardId}
              targetCard={card}
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
