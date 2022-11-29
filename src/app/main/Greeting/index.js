import React from "react";
import classes from "./Greeting.module.css";

export default function Greeting(){
  return (
    <div className={classes.greeting_wrapper}>
      <div className={classes.content}>
        <span className={classes.greeting_title}>WELCOME TO TASK MANAGER</span>
        <span className={classes.greeting_description}>Для создания новой доски нажмите кнопку "создать" в верхней панели</span>
      </div>
    </div>
  );
};
