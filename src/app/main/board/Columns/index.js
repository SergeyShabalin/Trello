import React, { useState } from "react";
import PropTypes from "prop-types";
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from "./ColumnWrapper.module.css";
import ListCard from "../Cards";


export default function Column({ column, cardList, columnIndex }) {

  const [isCreator, setIsCreator] = useState(false);

  function addCardMenuCreate() {
    setIsCreator(true);
  }

  function menuClose() {
    setIsCreator(false);
  }

  return (
    <div className={classes.list_wrapper}>
      <ListHeader column={column}
                  addCardMenuCreate={addCardMenuCreate} />

      <div className={classes.cards_wrapper}>
        {cardList.map((item, index) => (
          <ListCard
            cardIndex={index}
            columnIndex={columnIndex}
            columnHeader={column.header}
            columnId={column._id}
            key={item._id}
            cardId={item._id}
            header={item.header}
          />
        ))
        }
      </div>
      <div className={classes.card_creator}>
        <CardCreator
          isCreator={isCreator}
          menuClose={menuClose}
          menuCreate={addCardMenuCreate}
          columnId={column._id} />
      </div>
    </div>
  );
}

Column.propTypes = {
  header: PropTypes.string
};
