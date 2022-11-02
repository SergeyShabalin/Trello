import React ,{ useState }from "react";


export default function useOpenCalendar(){
  const [isOpen, setIsOpen] = useState(false);

  function openCalendar(){
    setIsOpen(true)
  }

  function closeCalendar(){
    setIsOpen(false)
  }
  return {
    isOpen,
    openCalendar,
    closeCalendar
  }
};

