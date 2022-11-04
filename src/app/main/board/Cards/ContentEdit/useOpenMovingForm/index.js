import React, {useState} from "react";

export default function useOpenMovingForm(){

  const [isMoving, setMoving] = useState(false);

  function openMoving(){
    setMoving(true)
  }

  function closeMoving(){
    setMoving(false)
  }


  return  {
    isMoving,
    openMoving,
    closeMoving
  }
};

