import React,{ useState } from "react";

export default function useOpenEditor(){

  const [isEditor, setEditor] = useState(false);

  function  openEditor(){
    setEditor(true);
  }

  function  closeEditor(){
    setEditor(false);
  }
  return {
    isEditor,
    openEditor,
    closeEditor
  };
};
