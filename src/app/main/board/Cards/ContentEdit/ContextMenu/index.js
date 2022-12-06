import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";

import { deleteCard } from "../../../../../../store/cards/asyncActions";
import classes from "./CardContextMenu.module.css";

export default function CardContextMenu({ cardId, closeModalContextMenu, columnId, order }) {

  const dispatch = useDispatch();

  function cardDelete() {
    const isDelete = window.confirm("Удалить карточку?");
    if (isDelete) dispatch(deleteCard(cardId, columnId, order));
    closeModalContextMenu();
  }

  return (
    <form className={classes.contextWrapper}>
      <ul className={classes.ul}>
        <li className={classes.li} onClick={cardDelete}>
          <RiDeleteBin5Line />
          <span className={classes.li_title}>Удалить карточку</span>
        </li>
      </ul>
    </form>
  );
}
