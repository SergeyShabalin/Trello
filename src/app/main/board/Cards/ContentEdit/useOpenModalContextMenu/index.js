import React,{ useState } from "react";

export default function useOpenModalContextMenu() {

  const [isModalContextMenu, setIsModalContextMenu] = useState(false);

  function openModalContextMenu() {
    setIsModalContextMenu(true);
  }

  function closeModalContextMenu() {
    setIsModalContextMenu(false);
  }

  return {
    isModalContextMenu,
    openModalContextMenu,
    closeModalContextMenu
  };
};
