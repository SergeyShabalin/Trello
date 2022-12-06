import React from "react";
import { RiTrelloFill } from "react-icons/ri";

import classes from "../../Creator.module.css";

export default function NewBoard({openCreator}){
  return (
      <div className={classes.wrapper} onClick={openCreator}>
        <div className={classes.header}>
          <RiTrelloFill />
          <span className={classes.title}>Cоздайте доску</span>
        </div>
        <p>Доска представляет собой совокупность карточек,
          упорядоченных в списках. Используйте её для управления проектом,
          отслеживания или организации чего угодно.</p>
      </div>
  );
};

