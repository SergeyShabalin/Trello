import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Greeting.module.css";

export default function Greeting({ currentBoard }) {

  const navigate = useNavigate();
  useEffect(() => {
    // if (currentBoard.title !== "") navigate(`/board/${currentBoard._id}`);
  }, [currentBoard]);

  return (
    <div className={classes.greeting_wrapper}>
      <div className={classes.content}>
        <span className={classes.greeting_title}>WELCOME TO TASK MANAGER</span>
        <span className={classes.greeting_description}>Для создания новой доски нажмите кнопку "создать" в верхней панели</span>
      </div>
    </div>
  );
};
