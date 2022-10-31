import React,{ useState } from "react";

export default function useOpenCardCreator(){
  const [isCreator, setIsCreator] = useState(false);

  function openCreator() {
    setIsCreator(true);
  }

  function closeCreator() {
    setIsCreator(false);
  }

  return{
    isCreator, openCreator, closeCreator
  }
};
