import React, { useState }from "react";

export default function useOpenCloseSampleCreator(){

  const [isSampleCreator, setIsSampleCreator] = useState(false);

  function openSampleCreator() {
    setIsSampleCreator(true);
  }

  function closeSampleCreator() {
    setIsSampleCreator(false);
  }

  return{
    openSampleCreator,
    closeSampleCreator,
    isSampleCreator
  }
};

