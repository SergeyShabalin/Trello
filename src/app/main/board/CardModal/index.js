import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, } from "react-router-dom";
import { clearCardInfo, getCardInfo } from "../../../../store/cards/asyncActions";
import Description from "./Description";
import CheckList from "./CheckList";
import CheckListCreator from "./CheckListCreator";
import Modal from "../../../../components/basic/Modal";
import { Header } from "./Header";
import ChecklistTitle from "./CheckList/Title";
import classes from "./CardModal.module.css";
import Deadline from "./Deadline";

export default function CardModal() {

  const cardInfo = useSelector(({ cards }) => cards.cards);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { cardId } = useParams();
  const checkListDone = cardInfo?.checkList.filter(item => item.done);

  useEffect(() => {
    dispatch(getCardInfo(cardId));
  }, []);

  function closeModal() {
    navigate("/");
    dispatch(clearCardInfo());
  }

  const CheckLists = cardInfo?.checkList.map(checkItem => (
    <CheckList key={checkItem._id} cardId={cardId} {...checkItem} />));

  return (
    <Modal onClose={closeModal} open>
      <div className={classes.card_modal_wrapper}>

        <Header closeModal={closeModal} title={cardInfo.header} />
        <p className={classes.title_column}>в колонке "{cardInfo?.columnHeader}"</p>

          <Deadline
            columnId={cardInfo.column_id}
            decisionDate={cardInfo.decisionDate}
            cardId = {cardInfo._id}/>


        <Description
          description={cardInfo.description}
          columnId={cardInfo.column_id}
          cardId={cardId}
        />

        <ChecklistTitle
          allTask={cardInfo?.checkList.length}
          doneTask={checkListDone.length} />
        <div className={classes.checklists_wrapper}>{CheckLists}</div>
        <CheckListCreator cardId={cardId} />

      </div>
    </Modal>
  );
}

