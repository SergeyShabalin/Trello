import React,{ useState } from "react";

export default function useOpenCloseContext(){
  const [isContext, setIsContext] = useState(false);

  function contextOpen() {
    setIsContext(true);
  }

  function contextClose() {
    setIsContext(false);
  }
  return{
    contextOpen,
    contextClose,
    isContext
  }
}