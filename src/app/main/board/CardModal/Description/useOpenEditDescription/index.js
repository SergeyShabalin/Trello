import React, { useState } from "react";

export default function useOpenEditDescription() {

  const [isEditDescription, setIsEditDescription] = useState(false);

  function openEditDescription() {
    setIsEditDescription(true);
  }

  function closeEditDescription() {
    setIsEditDescription(false);
  }

  return {
    isEditDescription,
    openEditDescription,
    closeEditDescription
  };
}
