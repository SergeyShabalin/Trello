import React, { useState, useEffect } from "react";
import classes from "./Slider.module.css";

export default function Slider({allTask, doneTask}) {

  const [progress, setProgress] = useState(1);
  const checkListsProgress =((doneTask/allTask)*100)


  useEffect(() => {
    if (allTask!==0) setProgress(checkListsProgress);
  }, [checkListsProgress]);

  function changeValue(e) {
  }

  const getBackgroundSize = () => {
    return { backgroundSize: `${ (progress * 100) / 100}% 100%` };
  };
  return (
    <div className={classes.wrapper}>
      <span className={classes.progress_percent}>{allTask && progress.toFixed(0).toString()}%</span>
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

