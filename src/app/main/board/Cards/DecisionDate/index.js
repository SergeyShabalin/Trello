import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { AiOutlineFieldTime } from "react-icons/ai";
import classes from "./DecisionDate.module.css";


export default function DecisionDate({ decisionDate }) {
  const [overdueDate, setOverdueDate] = useState(false);
  const [isYear, setYear] = useState(false);
  const changedDate = new Date(decisionDate).getTime();

  const yearNow = new Date().getFullYear();
  const year = new Date(decisionDate).getFullYear();

  useEffect(() => {
    const now = new Date().getTime();
    if (changedDate < now) setOverdueDate(true);
    if (yearNow !== year) setYear(true);
  }, []);

  const cardDateWithYear = format(changedDate, "PP", { locale: ru });
  const cardDate = format(changedDate, "d MMMM", { locale: ru });

  return (
    <div className={overdueDate ? `${classes.over_decision_date}` : `${classes.decision_date}`}>
      <div className={classes.icon}><AiOutlineFieldTime /></div>
      <div className={classes.date}>{!isYear ? cardDate : cardDateWithYear}</div>
    </div>
  );
};

