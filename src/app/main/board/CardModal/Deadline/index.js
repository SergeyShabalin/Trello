import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./Deadline.module.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Deadline({ decisionDate }) {

  const [date, setDate] = useState(new Date());
  const [isCalendar, setCalendar] = useState(false);

  const convertDateTime = decisionDate ? format(new Date(decisionDate), "d MMMM HH:mm ", { locale: ru }) : null;

  if (!isCalendar) return (
    <div className={classes.wrapper}>
      <p>Срок</p>
      <div className={classes.date_wrapper}>
        <span className={classes.date_time}>{convertDateTime}
        <div className={classes.icon}> <MdKeyboardArrowDown/></div>
        </span>
      </div>
    </div>
  );

  return (
    <div className={classes.calendar_wrapper}>
      <Calendar
        activeStartDate={new Date()}
        className={classes.calendar}
        onChange={setDate}
        value={date} />
    </div>

  );
};
