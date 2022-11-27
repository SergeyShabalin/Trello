import React from "react";
import classes from "../../Creator.module.css";
import { BiCopyAlt } from "react-icons/bi";

export default function SampleBoard({openSampleCreator}){
  return (
    <div className={classes.wrapper} onClick={openSampleCreator}>
      <div className={classes.header}>
        <BiCopyAlt />
        <span className={classes.title}>Начните с шаблона</span>
      </div>
      <p>Начните работу быстрее, используя шаблон доски</p>
    </div>
  );
};

