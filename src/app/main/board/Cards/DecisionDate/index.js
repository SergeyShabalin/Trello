import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { AiOutlineFieldTime } from "react-icons/ai";
import classes from "./DecisionDate.module.css";


export default function DecisionDate({ decisionDate }) {

  const [isYear, setYear] = useState(false);
  const changedDate = new Date(decisionDate).getTime();
  const [now] = useState(new Date().getTime());

  const yearNow = new Date().getFullYear();
  const year = new Date(decisionDate).getFullYear();

  useEffect(() => {
    if (yearNow !== year) setYear(true);
  }, [decisionDate]);

  const cardDateWithYear = format(changedDate, "PP", { locale: ru });
  const cardDate = format(changedDate, "d MMMM", { locale: ru });

  return (
    <div className={changedDate < now ? `${classes.over_decision_date}` : `${classes.decision_date}`}>
      <div className={classes.icon}><AiOutlineFieldTime /></div>
      <div className={classes.date}>{!isYear ? cardDate : cardDateWithYear}</div>
    </div>
  );
};

