import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Editor from "./Editor";
import Button from "../../../../components/basic/Button";
import useOpenCardCreator from "./useOpenCreator";
import { addNewCard } from "../../../../store/cards/asyncActions";
import classes from "./CardCreator.module.css";


export default function CardCreator({columnId}) {

  const [cardHeader, setCardHeader] = useState("");
  const {isCreator, openCreator, closeCreator} = useOpenCardCreator()
  const dispatch = useDispatch();

  function addCard() {
    dispatch(addNewCard(columnId, cardHeader));
    closeCreator();
  }

  function saveChanged(e) {
    if (e.keyCode === 13) addCard();
  }

  function getNewValue({ target }) {
    setCardHeader(target.value);
  }

  if (!isCreator) return (
    <div className={classes.card_creator_launcher}>
      <Button onClick={openCreator}
              variant={"text"}
              label={"Добавить карточку"}
              startIcon={<AiOutlinePlus />}/>
    </div>
  );

  return (
    <div className={classes.card_creator}>
        <Editor
          getNewValue={getNewValue}
          saveChanged={saveChanged}
          addCard={addCard}
          closeCreator={closeCreator} />
    </div>
  );
}

