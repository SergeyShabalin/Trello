import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { updateCardDecisionDate } from "../../../../../store/cards/asyncActions";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../../../components/basic/Button";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import classes from "./Deadline.module.css";


import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";

export default function Deadline({ decisionDate, cardId, columnId }) {

  const dispatch = useDispatch();
  const ref = useRef();
  const { contextOpen, contextClose, isContext } = useOpenCloseContext();
  useOnClickOutside(ref, contextClose);

  function handleChange(e) {
    contextClose();
    dispatch(updateCardDecisionDate(e, cardId, columnId));
  };

  function deleteDate() {
    dispatch(updateCardDecisionDate(null, cardId, columnId));
  }

  const convertDateTime = decisionDate ? format(new Date(decisionDate), "d MMMM yyyy", { locale: ru }) : null;

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Срок</p>
      <div className={classes.date_wrapper}>
        <span className={classes.date_time} onClick={contextOpen}>
          {decisionDate ? convertDateTime : "Установить срок"}
          <div className={classes.icon}> <MdKeyboardArrowDown /></div>
        </span>
        {decisionDate && <Button
          onClick={deleteDate}
          variant="just_icon"
          icon={<AiOutlineClose />} />}
        {isContext && (
          <div className={classes.calendar_wrapper} ref={ref}>
            <DatePicker selected={decisionDate && new Date(decisionDate)} onChange={handleChange} inline />
          </div>
        )}
      </div>
    </div>
  );
};
