import React from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import classes from "./ListCard.module.css";

export default function ListCard({ header, cardId, columnId, columnHeader, description, cardIndex, columnIndex }) {

  return (
    <div className={classes.list_card}>
      <ContentEdit
        columnIndex={columnIndex}
        cardIndex={cardIndex}
        cardId={cardId}
        header={header}
        columnId={columnId}
        columnHeader={columnHeader}
        description={description} />
      <div className={classes.footer}>
        <DecisionDate />
        <Checkout />
      </div>
      <hr />
    </div>

  );
}
