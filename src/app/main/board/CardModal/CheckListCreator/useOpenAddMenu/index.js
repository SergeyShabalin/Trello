import React,{ useState } from "react";

 export default function useOpenAddMenu(){
   const [isAddMenu, setIsAddMenu] = useState(false);

   function addMenuOpen() {
     setIsAddMenu(true);
   }

   function addMenuClose() {
     setIsAddMenu(false);
   }
   return{
     addMenuClose,
     addMenuOpen,
     isAddMenu
   }
 }