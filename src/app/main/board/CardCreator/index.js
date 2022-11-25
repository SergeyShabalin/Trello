import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { addNewCard } from "../../../../store/cards/asyncActions";
import Editor from "./Editor";
import Button from "../../../../components/basic/Button";
import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import classes from "./CardCreator.module.css";

export default function CardCreator({columnId}) {

  const [cardHeader, setCardHeader] = useState("");
  const {contextOpen, contextClose, isContext} = useOpenCloseContext()
  const dispatch = useDispatch();

  function addCard() {
    dispatch(addNewCard(columnId, cardHeader));
  }

  function getNewValue({ target }) {
    setCardHeader(target.value);
  }

  if (!isContext) return (
    <div className={classes.card_creator_launcher}>
      <Button onClick={contextOpen}
              variant={"text"}
              label={"Добавить карточку"}
              startIcon={<AiOutlinePlus />}/>
    </div>
  );

  return (
    <div className={classes.card_creator}>
        <Editor
          getNewValue={getNewValue}
          addCard={addCard}
          closeCreator={contextClose} />
    </div>
  );
}

