import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import classes from "./Header.module.css";
import Button from "../../../components/basic/Button";
import ContextMenu from "./ContextMenu";
import Workspaces from "./Workspaces";
import Creator from "./Creator";


export default function Header() {

  return (
    <div className={classes.header}>

      <div className={classes.menu}>
        <Button
          variant="just_icon"
          variety={true}
          color="changed"
          icon={<CgMenuGridO />}/>
      </div>

      <Workspaces/>
      <Creator/>
      {/*<Button*/}
      {/*  variant="text"*/}
      {/*  label="Недавние"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}

      {/*<Button*/}
      {/*  label="В избранном"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}

      {/*<Button*/}
      {/*  label="Шаблоны"*/}
      {/*  endIcon={<MdKeyboardArrowDown />}/>*/}
    </div>
  );
}