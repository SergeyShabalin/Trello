import React, { useEffect } from "react";
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import classes from "./ListCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCardInfo } from "../../../../store/cards/asyncActions";
import { getAllColumns } from "../../../../store/columns/asyncActions";

export default function ListCard({ header, cardId, columnId,
                                   columnHeader, decisionDate,
                                 countTask, doneTask}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllColumns());
  }, []);

  return (
    <div className={classes.list_card}>
      <ContentEdit
        cardId={cardId}
        header={header}
        columnId={columnId}
        columnHeader={columnHeader}
      />
      <div className={classes.footer}>

        {decisionDate && <DecisionDate decisionDate={decisionDate} />}

        <Checkout
          countTask={countTask}
          doneTask={doneTask}
        />
      </div>
      <hr />
    </div>

  );
}
