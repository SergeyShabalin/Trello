import React,{ useState } from "react";


export default function useOpenCheckListEditor() {
  const [isEditCheckbox, setIsEditCheckbox] = useState(false);

  function openEditChecklist() {
    setIsEditCheckbox(true);
  }

  function closeEditCheckbox() {
    setIsEditCheckbox(false);
  }

  return {
    isEditCheckbox,
    openEditChecklist,
    closeEditCheckbox
  };
}