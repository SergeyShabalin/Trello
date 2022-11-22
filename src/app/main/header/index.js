import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import classes from "./Header.module.css";
import Button from "../../../components/basic/Button";
import ContextMenu from "./ContextMenu";
import Workspaces from "./Workspaces";


export default function Header() {




  return (
    <div className={classes.header}>

      <div className={classes.menu}>
        <Button
          variant="just_icon"
          variety={true}
          color="changed"
          icon={<CgMenuGridO />}>
        </Button>
      </div>



      <Workspaces/>


      <Button
        variant="text"
        label="Недавние"
        endIcon={<MdKeyboardArrowDown />}>
      </Button>

      <Button
        label="В избранном"
        endIcon={<MdKeyboardArrowDown />}
      >
      </Button>

      <Button
        label="Шаблоны"
        endIcon={<MdKeyboardArrowDown />}>
      </Button>

      <Button
        label="Создать"
      />


    </div>
  );
}