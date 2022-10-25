import React, { useState } from "react";
import { BsCheck2Square, BsCalendarDate } from "react-icons/bs";
import Description from "./Description";
import classes from "./CardModal.module.css";
import CheckList from "./CheckList";
import { AiOutlineMenuUnfold, AiOutlineCreditCard, AiOutlineClose } from "react-icons/ai";
import Button from "../../../../components/basic/Button";
import Checkbox from "../../../../components/basic/Сheckbox";


export default function CardModal({ columnHeader = "", titleCard = "", description, openCloseModal }) {

  const [isEditDescription, setIsEditDescription] = useState(false);

  function openEditDescription() {
    setIsEditDescription(true);
  }

  function closeEditDescription() {
    setIsEditDescription(false);
  }

  return (
    <form className={classes.card_modal_wrapper}>
      <div className={classes.header}>
        <div className={classes.title_wrapper}>
          <div><AiOutlineCreditCard className={classes.icons} /></div>
          <h3 className={classes.title}>{titleCard}</h3>
        </div>
        <div className={classes.form_close}>
          <Button
            onClick={openCloseModal}
            variant="just_icon"
            icon={<AiOutlineClose />}>
          </Button>
        </div>
      </div>

      <p className={classes.title_column}>в колонке "{columnHeader}"</p>
      <div className={classes.date_wrapper}>

      </div>

      <div className={classes.description_wrapper}>
        <AiOutlineMenuUnfold className={classes.icons} />
        <h4 className={classes.description_title}>Описание</h4>

        <Button variant="contained" label="Изменить" onClick={openEditDescription} />

      </div>
      <Description description={description}
                   openEditDescription={openEditDescription}
                   closeEditDescription={closeEditDescription}
                   isEditDescription={isEditDescription} />

      <div className={classes.checkbox_title_wrapper}>
        <BsCheck2Square className={classes.icons} />
        <h4 className={classes.checkbox_title}>Чек-лист</h4></div>

      <CheckList />
      <CheckList />
      <CheckList />
      <CheckList />
    </form>
  );
}

