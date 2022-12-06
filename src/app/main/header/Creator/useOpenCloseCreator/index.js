import React,{ useState } from "react";

export default function useOpenCloseCreator(){
  const [isCreator, setIsCreator] = useState(false);

  function openCreator() {
    setIsCreator(true);
  }

  function closeCreator() {
    setIsCreator(false);
  }

  return{
    openCreator,
    closeCreator,
    isCreator
  }
}
