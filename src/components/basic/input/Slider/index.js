import React, { useState, useEffect } from "react";
import { getCardInfo } from "../../../../store/cards/asyncActions";
import classes from "./Slider.module.css";

export default function Slider({allTask, doneTask}) {

  const [progress, setProgress] = useState(0);

  const checkListsProgress =((doneTask/allTask)*100)

  useEffect(() => {

    setProgress(checkListsProgress);
  }, [checkListsProgress]);

  function changeValue(e) {

  }


  const getBackgroundSize = () => {
    return { backgroundSize: `${(progress * 100) / 100}% 100%` };
  };
  return (
    <div className={classes.wrapper}>
      <span className={classes.progress_percent}>{progress.toFixed(0)}%</span>
      <input
             type="range"
             min="0"
             max="100"
             className={progress !== 100 ? `${classes.slider}` : `${classes.done}`}
             onChange={changeValue}
             value={progress}
             style={getBackgroundSize()} />
    </div>
  );
};

