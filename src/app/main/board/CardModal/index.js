import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import Description from "./Description";
import classes from "./CardModal.module.css";
import CheckList from "./CheckList";
import { AiOutlineMenuUnfold, AiOutlineCreditCard } from "react-icons/ai";


export default function CardModal({ columnHeader, titleCard }) {
  return (
    <form className={classes.card_modal_wrapper}>
      <div className={classes.title_wrapper}>
        <AiOutlineCreditCard className={classes.icons}/>
        <h3 className={classes.title}>{titleCard}</h3>
      </div>
      <p className={classes.title_column}>в колонке "{columnHeader}"</p>

      <div className={classes.description_wrapper}>
        <AiOutlineMenuUnfold className={classes.icons}/>
        <h4 className={classes.description_title}>Описание</h4>
      </div>
      <Description/>

      <div className={classes.checkbox_title_wrapper}>
        <BsCheck2Square className={classes.icons}/>
      <h4 className={classes.checkbox_title}>Чек-лист</h4></div>
      <CheckList/>
      <CheckList/>
      <CheckList/>
      <CheckList/>
    </form>
  );
}

