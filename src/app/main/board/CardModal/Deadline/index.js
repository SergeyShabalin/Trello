import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./Deadline.module.css";
import { updateCardDecisionDate } from "../../../../../store/cards/asyncActions";
import useOnClickOutside from "../../../../../hooks/UseOnClickOutside";
import useOpenCalendar from "./useOpenCalendar";


export default function Deadline({ decisionDate, cardId, columnId }) {

  const dispatch = useDispatch();
  const ref = useRef();
  const {isOpen, openCalendar, closeCalendar} = useOpenCalendar()
  useOnClickOutside(ref, closeCalendar);

  function handleChange (e){
    closeCalendar();
    dispatch(updateCardDecisionDate(e, cardId, columnId))};


  const convertDateTime = decisionDate ? format(new Date(decisionDate), "d MMMM yyyy", { locale: ru }) : null;

  return (
    <div className={classes.wrapper} >
      <p className={classes.title}>Срок</p>
      <div className={classes.date_wrapper}>
        <span className={classes.date_time} onClick={openCalendar}>
          {decisionDate ? convertDateTime : "Установить срок"}
          <div className={classes.icon}> <MdKeyboardArrowDown /></div>
        </span>
        {isOpen && (
          <div className={classes.calendar_wrapper} ref={ref}>
            <DatePicker  selected={decisionDate && new Date(decisionDate)} onChange={handleChange} inline />
          </div>
        )}
      </div>
    </div>
  );
};
