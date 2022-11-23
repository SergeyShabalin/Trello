import React,{ useState } from "react";

export default function useOpenCloseContextMenu(){

  const [isContext, setIsContext] = useState(false);

  function openContextMenu() {
    setIsContext(true);
  }

  function closeContextMenu() {
    setIsContext(false);
  }

  return {
    isContext,
    openContextMenu,
    closeContextMenu
  };
};
