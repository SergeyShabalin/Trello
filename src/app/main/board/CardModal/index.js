import React from "react";
import { BsCreditCard, BsCheck2Square } from "react-icons/bs";
import Description from "./Description";
import classes from "./CardModal.module.css";
import CheckList from "./CheckList";


export default function CardModal({ columnHeader, titleCard }) {
  return (
    <form className={classes.card_modal_wrapper}>
      <div className={classes.title_wrapper}>
        <BsCreditCard />
        <h3 className={classes.title}>{titleCard}</h3>
      </div>
      <p className={classes.title_column}>в колонке "{columnHeader}"</p>
      <Description/>

      <div className={classes.checkbox_title_wrapper}><BsCheck2Square/>
      <h4 className={classes.checkbox_title}>Чек-лист</h4></div>
      <CheckList/>
    </form>
  );
}

